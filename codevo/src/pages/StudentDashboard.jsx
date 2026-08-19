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
} from "lucide-react";

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
          axios.get(`http://localhost:5000/api/students/${id}`),
          axios.get("http://localhost:5000/api/settings"),
        ]);

        setStudent(studentRes.data);
        setSettings(settingsRes.data);
      } catch {
        navigate("/login");
      }
    };

    loadData();
  }, []);

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
      <div className="container py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {student.name.split(" ")[0]} 👋
            </h1>
            <p className="text-slate-400 mt-2">
              CODEVO Student Portal
            </p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Status Banner */}
        <div
          className={`rounded-3xl p-6 mb-8 border ${
            student.status === "Approved"
              ? "bg-green-900/20 border-green-600"
              : "bg-yellow-900/20 border-yellow-600"
          }`}
        >
          <div className="flex items-center gap-3">
            {student.status === "Approved" ? (
              <CheckCircle className="text-green-400" size={30} />
            ) : (
              <Clock className="text-yellow-400" size={30} />
            )}

            <div>
              <h2 className="text-2xl font-bold">
                {student.status === "Approved"
                  ? "Internship Approved"
                  : "Application Pending"}
              </h2>

              <p className="text-slate-300">
                {student.status === "Approved"
                  ? "You're officially enrolled in the internship."
                  : "Our team is reviewing your application."}
              </p>
            </div>
          </div>
        </div>

        {/* Student Info */}
        <h2 className="text-2xl font-bold mb-5">Student Information</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <Card icon={<User />} title="Name" value={student.name} />
          <Card icon={<Mail />} title="Email" value={student.email} />
          <Card icon={<Phone />} title="Phone" value={student.phone} />
          <Card icon={<GraduationCap />} title="College" value={student.college} />
          <Card
            icon={<BookOpen />}
            title="Semester"
            value={`Semester ${student.semester}`}
          />
          <Card icon={<User />} title="USN" value={student.usn} />
        </div>

        {/* Approved Section */}
        {student.status === "Approved" && (
          <>
            <h2 className="text-2xl font-bold mb-5">Internship Access</h2>

            <div className="grid md:grid-cols-2 gap-6">
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
                    <button className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl mt-5 w-full">
                      Join WhatsApp Group
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    className="bg-slate-700 px-5 py-3 rounded-xl mt-5 w-full cursor-not-allowed"
                  >
                    Link not available
                  </button>
                )}
              </div>
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
              Once approved, this dashboard will automatically unlock
              webinars, Google Meet links and the WhatsApp community.
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