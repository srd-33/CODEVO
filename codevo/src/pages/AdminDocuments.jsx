import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Upload } from "lucide-react";

export default function AdminDocuments() {
  const API = import.meta.env.VITE_API_URL;

  const [docs, setDocs] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("offer");
  const [file, setFile] = useState(null);

 const fetchDocs = async () => {
  try {
    const res = await axios.get(`${API}/api/documents`);
    setDocs(res.data); // res.data is []
  } catch (err) {
    console.log(err);
    setDocs([]);
  }
};

  const handleUpload = async () => {
  if (!title || !file) {
    alert("Please enter a title and choose a file.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("file", file);

    await axios.post(`${API}/api/documents`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Document uploaded successfully!");

    setTitle("");
    setType("offer");
    setFile(null);

    fetchDocs();
  } catch (err) {
    console.log(err);
    alert(err.response?.data?.message || "Upload failed");
  }
};

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/api/documents/${id}`);
      fetchDocs();
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Document Manager</h1>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Document Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-slate-800 rounded-xl p-4 outline-none"
          >
            <option value="offer">Offer Letter</option>
            <option value="assignment">Assignment</option>
            <option value="certificate">Certificate</option>
          </select>

          <input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full bg-slate-800 rounded-xl p-3"
          />

          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Upload size={18} />
            Upload Document
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Uploaded Documents
        </h2>

      <div className="space-y-3">
  {Array.isArray(docs) &&
    docs.map((doc) => (
      <div
        key={doc._id}
        className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex justify-between items-center"
      >
        <div>
          <h3 className="font-semibold">{doc.title}</h3>
          <p className="text-slate-400 text-sm capitalize">
            {doc.type}
          </p>
        </div>

        <div className="flex gap-2">
         <a
  href={doc.fileUrl.replace("/upload/", "/upload/fl_attachment/")}
  target="_blank"
  rel="noreferrer"
>
<button
  onClick={async () => {
    const response = await fetch(doc.fileUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = doc.originalName || `${doc.title}.pdf`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  }}
  className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm"
>
  Download
</button>
</a>

          <button
            onClick={() => handleDelete(doc._id)}
            className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    ))}

  {docs.length === 0 && (
    <div className="text-center py-8 text-slate-400">
      No documents uploaded yet.
    </div>
  )}
</div>
      </div>
    </div>
  );
}