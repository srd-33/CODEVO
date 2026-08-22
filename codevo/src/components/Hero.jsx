import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300 pt-6 pb-8 lg:pt-8 lg:pb-10">
      {/* Background Blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/40 dark:bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="app-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-18 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-sm">
            Virtual Internship Platform
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
              From
              <span className="text-blue-600 dark:text-blue-400">
                {" "}Classroom
              </span>
              <br />
              to Code.
            </h1>

            <p className="mt-3 text-base md:text-lg leading-7 max-w-xl text-gray-600 dark:text-gray-300">
              Live webinars, real-world projects, industry tasks and internship
              certificates designed exclusively for Computer Science &
              Information Technology students.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/internships">
  <button className="btn-primary px-5 py-3 flex items-center justify-center gap-2">
    Explore Internships
    <ArrowRight size={18} />
  </button>
</Link>

              {/* <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-slate-700 px-5 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition text-gray-700 dark:text-gray-200">
                <PlayCircle size={18} />
                Watch Demo
              </button> */}
            </div>

            <div className="mt-6 flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  6
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Domains
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  16
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Weeks
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Live
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Webinars
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[28px] p-6 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 transition-colors">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                    CODEVO
                  </h3>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    LIVE
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    "Web Development",
                    "Artificial Intelligence",
                    "Java Full Stack",
                    "Data Science",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-slate-800 transition-colors"
                    >
                      <p className="font-medium text-gray-800 dark:text-gray-100 text-sm md:text-base">
                        {item}
                      </p>

                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        12-16 Weeks
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/register">
  <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-semibold">
    Enroll Now
  </button>
</Link>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 shadow-xl rounded-2xl px-4 py-3 border border-gray-200 dark:border-slate-700 transition-colors">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Certificate
              </p>
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Industry Verified
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}