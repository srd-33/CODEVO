import { CheckCircle, Laptop, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Internship() {
  const weeks = [
    "HTML, CSS & Responsive Design",
    "JavaScript & React Basics",
    "Node.js + Express APIs",
    "Mini Project + Final Evaluation",
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="section">
        <div className="app-container grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold text-sm">
              4 Week Virtual Internship
            </span>

            <h1 className="text-5xl font-bold mt-6 text-gray-900 dark:text-white">
              Web Development Internship
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mt-5 leading-8">
              Learn frontend and backend development through live webinars,
              practical assignments and a real-world project.
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">4</p>
                <p className="text-gray-500 dark:text-gray-400">Weeks</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">Online</p>
                <p className="text-gray-500 dark:text-gray-400">Mode</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">VTU</p>
                <p className="text-gray-500 dark:text-gray-400">Students</p>
              </div>
            </div>

            <Link to="/register">
              <button className="btn-primary mt-10">
                Register Now
              </button>
            </Link>
          </div>

          {/* Right Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              You'll Learn
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3 items-center text-gray-700 dark:text-gray-200">
                <Laptop className="text-blue-600" />
                React + Tailwind CSS
              </div>

              <div className="flex gap-3 items-center text-gray-700 dark:text-gray-200">
                <CheckCircle className="text-green-500" />
                REST APIs
              </div>

              <div className="flex gap-3 items-center text-gray-700 dark:text-gray-200">
                <CheckCircle className="text-green-500" />
                Express & MongoDB
              </div>

              <div className="flex gap-3 items-center text-gray-700 dark:text-gray-200">
                <Award className="text-yellow-500" />
                Internship Certificate
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Curriculum */}
      <section className="pb-24">
        <div className="app-container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Weekly Curriculum
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {weeks.map((week, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>

                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Week {i + 1}
                    </p>

                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {week}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}