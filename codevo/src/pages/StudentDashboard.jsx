import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  User,
  GraduationCap,
  Phone,
  Mail,
  CalendarDays,
  BookOpen,
  MessageCircle,
  CheckCircle,
  Clock,
  LogOut,
  FileText,
  Award,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL;

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [settings, setSettings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("studentId");

    if (!id) {
      navigate("/login");
      return;
    }

    const loadData = async () => {
      try {
        const [studentRes, settingsRes] = await Promise.all([
          axios.get(`${API}/api/students/${id}`),
          axios.get(`${API}/api/settings`),
        ]);

        setStudent(studentRes.data);
        setSettings(settingsRes.data);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    loadData();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("studentId");
    navigate("/login");
  };

  if (!student || !settings) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="app-container mx-auto px-4 py-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {student.name.split(" ")[0]} 👋
            </h1>
            <p className="text-slate-400 mt-2">CODEVO Student Portal</p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Status */}
        <div
          className={`rounded-3xl p-6 mb-8 border ${
            student.status === "Pending"
              ? "bg-yellow-900/20 border-yellow-600"
              : "bg-green-900/20 border-green-600"
          }`}
        >
          <div className="flex items-center gap-3">
            {student.status === "Pending" ? (
              <Clock className="text-yellow-400" size={30} />
            ) : (
              <CheckCircle className="text-green-400" size={30} />
            )}

            <div>
              <h2 className="text-2xl font-bold">
                {student.status === "Pending"
                  ? "Application Pending"
                  : student.status === "Approved"
                  ? "Internship Approved"
                  : "Internship Completed"}
              </h2>

              <p className="text-slate-300">
                {student.status === "Pending"
                  ? "Our team is reviewing your application."
                  : "Your internship portal is unlocked."}
              </p>
            </div>
          </div>
        </div>

        {/* Student Information */}
        <h2 className="text-2xl font-bold mb-5">Student Information</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <Card icon={<User />} title="Name" value={student.name} />
          <Card icon={<Mail />} title="Email" value={student.email} />
          <Card icon={<Phone />} title="Phone" value={student.phone} />
          <Card
            icon={<GraduationCap />}
            title="College"
            value={student.college}
          />
          <Card
            icon={<BookOpen />}
            title="Semester"
            value={`Semester ${student.semester}`}
          />
          <Card icon={<User />} title="USN" value={student.usn} />
        </div>

        {/* Approved / Completed */}
        {(student.status === "Approved" ||
          student.status === "Completed") && (
          <>
            <h2 className="text-2xl font-bold mb-5">Internship Access</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">

              {/* Webinar */}
              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
                <CalendarDays className="text-blue-400 mb-4" size={32} />

                <h3 className="text-xl font-bold">
                  {settings.webinarTitle}
                </h3>

                <p className="text-slate-400 mt-2">
                  Orientation Session
                </p>

                <p className="mt-4 font-semibold text-lg">
                  {settings.webinarDate
                    ? `${settings.webinarDate} • ${settings.webinarTime}`
                    : "Not announced"}
                </p>

                {settings.meetLink && (
                  <a
                    href={settings.meetLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl mt-5">
                      Join Google Meet
                    </button>
                  </a>
                )}
              </div>

              {/* WhatsApp */}
              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
                <MessageCircle className="text-green-400 mb-4" size={32} />

                <h3 className="text-xl font-bold">
                  WhatsApp Community
                </h3>

                <p className="text-slate-400 mt-2">
                  Join your internship group
                </p>

                {settings.whatsappLink ? (
                  <a
                    href={settings.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-green-600 hover:bg-green-700 w-full py-3 rounded-xl mt-5">
                      Join WhatsApp Group
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    className="bg-slate-700 w-full py-3 rounded-xl mt-5"
                  >
                    Link not available
                  </button>
                )}
              </div>
            </div>

            {/* Documents */}
            <h2 className="text-2xl font-bold mb-5">
              Internship Documents
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Offer Letter */}
              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
                <FileText className="text-blue-400 mb-4" size={32} />

                <h3 className="text-xl font-bold">
                  Offer Letter
                </h3>

                <p className="text-slate-400 mt-2">
                  Personalized DOCX
                </p>

                <button
                  onClick={() =>
                    window.open(
                      `${API}/api/generate/offer/${student._id}`,
                      "_blank"
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl mt-5"
                >
                  Download Offer Letter
                </button>
              </div>

              {/* Certificate */}
              {student.status === "Completed" && (
                <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
                  <Award className="text-green-400 mb-4" size={32} />

                  <h3 className="text-xl font-bold">
                    Completion Certificate
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Personalized DOCX
                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        `${API}/api/generate/certificate/${student._id}`,
                        "_blank"
                      )
                    }
                    className="bg-green-600 hover:bg-green-700 w-full py-3 rounded-xl mt-5"
                  >
                    Download Certificate
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Pending */}
        {student.status === "Pending" && (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">
            <Clock className="mx-auto text-yellow-400 mb-4" size={48} />

            <h2 className="text-2xl font-bold">
              Waiting for Approval
            </h2>

            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Once approved, webinars, WhatsApp and your Offer Letter will appear automatically.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
      <div className="text-blue-400 mb-3">{icon}</div>
      <p className="text-slate-400 text-sm">{title}</p>
      <h3 className="font-semibold mt-1">{value}</h3>
    </div>
  );
}