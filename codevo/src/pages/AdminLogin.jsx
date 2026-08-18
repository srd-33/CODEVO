import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      localStorage.setItem("admin", res.data.admin.email);

      navigate("/admin/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8 border border-slate-700">

        <h1 className="text-3xl font-bold text-white mb-2">
          Admin Login
        </h1>

        <p className="text-slate-400 mb-8">
          CODEVO Management Portal
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div className="flex items-center border border-slate-600 rounded-xl px-4 bg-slate-800">
            <Mail className="text-slate-400"/>
            <input
              type="email"
              placeholder="admin@codevo.in"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-4 bg-transparent outline-none text-white"
            />
          </div>

          <div className="flex items-center border border-slate-600 rounded-xl px-4 bg-slate-800">
            <Lock className="text-slate-400"/>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-4 bg-transparent outline-none text-white"
            />
          </div>

          <button className="btn-primary w-full">
            Login
          </button>

          {msg && (
            <p className="text-red-400 text-sm text-center">
              {msg}
            </p>
          )}

        </form>
      </div>
    </div>
  );
}