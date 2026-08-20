import { GraduationCap } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");


  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
         `${API}/api/students/google/login`,
        {
          token: credentialResponse.credential,
        }
      );

      localStorage.setItem("studentId", res.data.student._id);
      navigate("/student/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center text-white px-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={32} />
          </div>

          <h1 className="text-3xl font-bold">Student Login</h1>

          <p className="text-slate-400 mt-2">
            Continue using your registered Google account
          </p>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setMessage("Google Sign-In failed")}
            theme="filled_blue"
            shape="pill"
            text="continue_with"
            width="320"
          />
        </div>

        {message && (
          <p className="text-center text-red-400 mt-5">{message}</p>
        )}

        <p className="text-xs text-slate-500 text-center mt-8">
          Use the same Google account you used during registration.
        </p>

      </div>
    </div>
  );
}