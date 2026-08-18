import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => setStudents(res.data));
  }, []);

  const navigate = useNavigate();

useEffect(() => {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    navigate("/admin/login");
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("admin");
  navigate("/admin/login");
};

  return (
    <div className="min-h-screen bg-slate-950 p-10">

      <div className="flex justify-between items-center mb-8">
  <h1 className="text-4xl font-bold text-white">
    Student Registrations
  </h1>

  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
  >
    Logout
  </button>
</div>

      <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

        <table className="w-full text-left text-white">

          <thead className="bg-slate-800">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr
                key={s._id}
                className="border-t border-slate-700"
              >
                <td className="p-4">{s.name}</td>
                <td className="p-4">{s.email}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}