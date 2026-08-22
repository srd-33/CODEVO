import { Link } from "react-router-dom";
import { internships } from "../data/internships";
import {
  Laptop,
  Brain,
  Database,
  Code,
  Shield,
  Cpu,
  Clock,
} from "lucide-react";

const icons = {
  Laptop,
  Brain,
  Database,
  Code,
  Shield,
  Cpu,
};

export default function Internships() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      {/* Compact Hero */}
      <section className="pt-8 pb-12 lg:pt-10 lg:pb-16">
        <div className="app-container">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              CODEVO Internship Programs
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Choose Your Domain
            </h1>

            <p className="text-gray-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-7">
             Industry-oriented virtual internships specially designed for Computer Science,
  Information Science, Artificial Intelligence & Machine Learning, Data Science,
  Cyber Security, and IT related engineering branches.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((course) => {
              const Icon = icons[course.icon];

              return (
                <div
                  key={course.slug}
                  className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-5 text-white">
                    <Icon size={28} />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h2>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mt-2 text-sm">
                    <Clock size={15} />
                    {course.duration}
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 mt-4 leading-6 text-sm">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {course.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to={`/internships/${course.slug}`}>
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition">
                      View Program
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}