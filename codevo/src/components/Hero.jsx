import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/40 dark:bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="container section relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-sm">
              VTU Virtual Internship Platform
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white">
              From
              <span className="text-blue-600 dark:text-blue-400">
                {" "}Classroom
              </span>
              <br />
              to Code.
            </h1>

            <p className="mt-6 text-lg leading-8 max-w-xl text-gray-600 dark:text-gray-300">
              Live webinars, real-world projects, industry tasks and internship
              certificates designed exclusively for VTU Computer Science &
              Information Technology students.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Explore Internships
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center justify-center gap-2 border border-gray-300 dark:border-slate-700 px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition">
                <PlayCircle size={20} />
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  6
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Domains
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  4
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Weeks
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[32px] p-8 shadow-2xl">

              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 transition-colors">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                    CODEVO
                  </h3>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    LIVE
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    "Web Development",
                    "Artificial Intelligence",
                    "Java Full Stack",
                    "Data Science",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-slate-800 transition-colors"
                    >
                      <p className="font-medium text-gray-800 dark:text-gray-100">
                        {item}
                      </p>

                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        4 Weeks
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-900 shadow-xl rounded-2xl px-5 py-4 border border-gray-200 dark:border-slate-700 transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Certificate
              </p>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                Industry Verified
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}