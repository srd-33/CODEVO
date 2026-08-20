import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Search, Users, Trash2, Download } from "lucide-react";
import { CSVLink } from "react-csv";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/admin/login");
      return;
    }

    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this registration?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/students/${id}`
      );

      fetchStudents();
    } catch {
      alert("Failed to delete student");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/students/${id}/status`,
        { status }
      );

      fetchStudents();
    } catch {
      alert("Failed to update status");
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container py-10">
{/* Header */}
<div className="flex justify-between items-center mb-8">
  <div>
    <h1 className="text-4xl font-bold">
      Admin Dashboard
    </h1>
    <p className="text-slate-400 mt-1">
      CODEVO Student Management
    </p>
  </div>

  <div className="flex gap-3">
    <Link to="/admin/documents">
      <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg">
        Documents
      </button>
    </Link>

    <Link to="/admin/settings">
      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
        Settings
      </button>
    </Link>

    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
    >
      Logout
    </button>
  </div>
</div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full md:w-72">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  Total Registrations
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {students.length}
                </h2>
              </div>

              <Users
                className="text-blue-400"
                size={36}
              />
            </div>
          </div>

          <CSVLink
            data={students}
            filename="codevo-registrations.csv"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold justify-center"
          >
            <Download size={20} />
            Export CSV
          </CSVLink>

        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">USN</th>
                <th className="p-4">College</th>
                <th className="p-4">Semester</th>
                <th className="p-4">Domain</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student._id}
                  className="border-t border-slate-700 hover:bg-slate-800/50"
                >
                  <td className="p-4 font-medium">
                    {student.name}
                  </td>

                  <td className="p-4">{student.usn}</td>

                  <td className="p-4">
                    {student.college}
                  </td>

                  <td className="p-4 text-center">
                    {student.semester}
                  </td>

                  <td className="p-4">
                    {student.domain}
                  </td>

                  <td className="p-4">
                    {student.phone}
                  </td>

                  <td className="p-4">
                    <select
                      value={student.status}
                      onChange={(e) =>
                        handleStatusChange(
                          student._id,
                          e.target.value
                        )
                      }
                      className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="Pending">
                        Pending
                      </option>
                      <option value="Approved">
                        Approved
                      </option>
                      <option value="Completed">
                        Completed
                      </option>
                    </select>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        handleDelete(student._id)
                      }
                      className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-8 text-slate-400"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}