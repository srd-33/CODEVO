import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

const API = import.meta.env.VITE_API_URL;

export default function AdminSettings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    webinarTitle: "",
    webinarDate: "",
    webinarTime: "",
    meetLink: "",
    whatsappLink: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("${API}/api/settings")
      .then((res) => setSettings(res.data));
  }, []);

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        "${API}/api/settings",
        settings
      );

      setMessage("Settings updated successfully ✅");
    } catch {
      setMessage("Failed to update settings");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

          <h1 className="text-3xl font-bold mb-2">
            Admin Settings
          </h1>

          <p className="text-slate-400 mb-8">
            Manage webinar and WhatsApp details for all approved students.
          </p>

          <div className="space-y-5">

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Webinar Title
              </label>

              <input
                name="webinarTitle"
                value={settings.webinarTitle}
                onChange={handleChange}
                placeholder="CODEVO Internship Orientation"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
              />
            </div>

           <div>
  <label className="text-sm text-slate-400 mb-2 block">
    Webinar Date & Time
  </label>

  <div className="grid grid-cols-2 gap-4">
    <input
      type="date"
      name="webinarDate"
      value={settings.webinarDate}
      onChange={handleChange}
      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
    />

    <input
      type="time"
      name="webinarTime"
      value={settings.webinarTime}
      onChange={handleChange}
      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
    />
  </div>
</div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                Google Meet Link
              </label>

              <input
                name="meetLink"
                value={settings.meetLink}
                onChange={handleChange}
                placeholder="https://meet.google.com/..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">
                WhatsApp Group Link
              </label>

              <input
                name="whatsappLink"
                value={settings.whatsappLink}
                onChange={handleChange}
                placeholder="https://chat.whatsapp.com/..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Settings
            </button>

            {message && (
              <p className="text-center text-green-400">
                {message}
              </p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}