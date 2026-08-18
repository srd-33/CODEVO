import { Mail, MessageCircle, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is this internship valid for VTU students?",
    a: "Yes. CODEVO conducts virtual internship programs for VTU Computer Science & IT students.",
  },
  {
    q: "How will I receive meeting links?",
    a: "All webinar and announcement links are shared through the official WhatsApp group.",
  },
  {
    q: "Where do I submit assignments?",
    a: "Assignments and projects are submitted using Google Drive folders shared during the internship.",
  },
  {
    q: "How do I get my certificate?",
    a: "After successful completion, you'll receive a Google Drive link to download your internship certificate.",
  },
];

export default function Support() {
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">

      <section className="section">
        <div className="container">

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Contact & Support
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              We're here to help throughout your internship journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-slate-700 transition-colors">
              <MessageCircle className="text-green-500 mb-4" size={36}/>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                WhatsApp Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join your internship batch and receive announcements, webinar links and support.
              </p>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold">
                Join WhatsApp
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-slate-700 space-y-6 transition-colors">

              <div className="flex gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">support@codevo.in</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                  <p className="text-gray-500 dark:text-gray-400">Bengaluru, Karnataka</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Support Hours</h3>
                  <p className="text-gray-500 dark:text-gray-400">Monday – Saturday</p>
                  <p className="text-gray-500 dark:text-gray-400">9:00 AM – 8:00 PM</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 dark:text-white"
                >
                  {item.q}
                  <ChevronDown
                    className={`transition ${open === i ? "rotate-180" : ""}`}
                  />
                </button>

                {open === i && (
                  <div className="px-5 pb-5 text-gray-600 dark:text-gray-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}