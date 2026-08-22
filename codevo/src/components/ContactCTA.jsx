import { Mail, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";


export default function ContactCTA() {
  return (
    <section
      id="support"
      className="section bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="app-container">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-[32px] p-10 md:p-14 text-white transition-colors">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Need Help?
            </h2>

            <p className="mt-4 text-blue-100">
              Contact us anytime. All internship communication happens through WhatsApp.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <MessageCircle className="mx-auto mb-3" size={34} />
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-blue-100 text-sm mt-2">
                Join your internship group
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <Mail className="mx-auto mb-3" size={34} />
              <h3 className="font-semibold">Email</h3>
              <p className="text-blue-100 text-sm mt-2">
                support@codevo.in
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <Clock className="mx-auto mb-3" size={34} />
              <h3 className="font-semibold">Support Hours</h3>
              <p className="text-blue-100 text-sm mt-2">
                9 AM – 5 PM
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <Link to="/support">
  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
    Contact Support
  </button>
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}