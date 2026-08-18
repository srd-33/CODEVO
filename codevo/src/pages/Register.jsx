import { User, Mail, GraduationCap } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Register() {

  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/students/register",
      {
        name,
        email,
      }
    );

    setMessage("✅ Registration Successful!");
    setName("");
    setEmail("");
  } catch (err) {
    setMessage(err.response?.data?.message || "Something went wrong");
  }

  setLoading(false);
};
  
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                CODEVO Registration
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight text-gray-900 dark:text-white">
                Start Your Virtual Internship
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mt-5 leading-8">
                Register using your name and email. You'll receive the WhatsApp
                group link, webinar schedule and internship updates after
                verification.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <GraduationCap className="text-blue-600" />
                  VTU Computer Science & IT Students
                </div>

                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <Mail className="text-blue-600" />
                  Email used for certificate verification
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300">

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Student Registration
              </h2>

             <form onSubmit={handleRegister} className="space-y-5">

                <div>
                  <label className="font-medium mb-2 block text-gray-700 dark:text-gray-200">
                    Full Name
                  </label>

                  <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl px-4 bg-white dark:bg-slate-800 transition-colors">
                    <User className="text-gray-400 dark:text-gray-500" />
                    <input
  type="text"
  placeholder="Skanda R Dixit"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full p-4 outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400"
/>
                   
                  </div>
                </div>

                <div>
                  <label className="font-medium mb-2 block text-gray-700 dark:text-gray-200">
                    Email Address
                  </label>

                  <div className="flex items-center border border-gray-300 dark:border-slate-600 rounded-xl px-4 bg-white dark:bg-slate-800 transition-colors">
                    <Mail className="text-gray-400 dark:text-gray-500" />
                    <input
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-4 outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400"
/>
                  </div>
                </div>

               <button
  type="submit"
  disabled={loading}
  className="btn-primary w-full py-4"
>
  {loading ? "Registering..." : "Complete Registration"}
</button>

{message && (
  <p className="text-center text-sm font-medium text-green-500">
    {message}
  </p>
)}

              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-5 text-center">
                By registering, you agree to receive internship related
                communication through Email & WhatsApp.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}