import {
  Phone,
  GraduationCap,
  Building2,
  Hash,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    college: "",
    usn: "",
    semester: "",
    domain: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (
      !form.phone ||
      !form.college ||
      !form.usn ||
      !form.semester ||
      !form.domain
    ) {
      setMessage("Please fill all the details first.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/google",
        {
          token: credentialResponse.credential,
          phone: form.phone,
          college: form.college,
          usn: form.usn,
          semester: form.semester,
          domain: form.domain,
        }
      );

      localStorage.setItem("studentId", res.data.student._id);
      navigate("/student/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Google Sign-In failed");
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <span className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                CODEVO Registration
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                Start Your Virtual Internship
              </h1>

              <p className="text-slate-400 mt-6 leading-8">
                Complete your academic details, then continue securely using your
                Google account. Your Google email will be used for certificates
                and internship communication.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-400" />
                  VTU Computer Science & IT Students
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400" />
                  WhatsApp used for webinar communication
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Student Registration
              </h2>

              <div className="space-y-5">
                {/* Phone */}
                <Input
                  icon={<Phone size={18} />}
                  name="phone"
                  placeholder="WhatsApp Number"
                  value={form.phone}
                  onChange={handleChange}
                />

                {/* College */}
                <Input
                  icon={<Building2 size={18} />}
                  name="college"
                  placeholder="College Name"
                  value={form.college}
                  onChange={handleChange}
                />

                {/* USN */}
                <Input
                  icon={<Hash size={18} />}
                  name="usn"
                  placeholder="VTU USN"
                  value={form.usn}
                  onChange={handleChange}
                />

                {/* Semester */}
                <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4">
                  <BookOpen className="text-slate-400" size={18} />

                  <select
                    name="semester"
                    value={form.semester}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                    required
                  >
                    <option value="">Select Semester</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option
                        key={sem}
                        value={sem}
                        className="bg-slate-900"
                      >
                        Semester {sem}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Domain */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl px-4">
                  <select
                    name="domain"
                    value={form.domain}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent outline-none"
                    required
                  >
                    <option value="">Select Internship Domain</option>
                    <option value="Web Development" className="bg-slate-900">
                      Web Development
                    </option>
                    <option
                      value="Artificial Intelligence"
                      className="bg-slate-900"
                    >
                      Artificial Intelligence
                    </option>
                    <option value="Data Science" className="bg-slate-900">
                      Data Science
                    </option>
                    <option value="Java Full Stack" className="bg-slate-900">
                      Java Full Stack
                    </option>
                    <option value="Cyber Security" className="bg-slate-900">
                      Cyber Security
                    </option>
                    <option value="Python Development" className="bg-slate-900">
                      Python Development
                    </option>
                  </select>
                </div>

                {/* Google Sign In */}
                <div className="pt-2 flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => setMessage("Google Sign-In failed")}
                    theme="filled_blue"
                    shape="pill"
                    text="continue_with"
                    width="320"
                  />
                </div>

                <p className="text-center text-xs text-slate-400">
                  Fill all details above, then continue with Google.
                </p>

                {message && (
                  <p className="text-center text-red-400 font-medium">
                    {message}
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-500 mt-6 text-center">
                By continuing with Google, you agree to receive internship
                communication through Email & WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({
  icon,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl px-4">
      <span className="text-slate-400">{icon}</span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-transparent outline-none placeholder:text-slate-500"
        required
      />
    </div>
  );
}