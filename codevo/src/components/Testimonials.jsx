import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul S",
    college: "RNSIT • CSE",
    review:
      "The webinars were practical and the project helped me build my resume. The certificate process was smooth.",
  },
  {
    name: "Ayesha M",
    college: "BMSCE • ISE",
    review:
      "Everything happened through WhatsApp, so it was super easy to follow. The mentors were responsive.",
  },
  {
    name: "Nikhil P",
    college: "PESU • CSE",
    review:
      "I completed the internship while staying at home. The assignments were actually useful for placements.",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            What Students Say
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Feedback from students who completed CODEVO internships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-3xl p-7 shadow-sm hover:shadow-xl border border-gray-200 dark:border-slate-700 transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                “{r.review}”
              </p>

              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-slate-700">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {r.college}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}