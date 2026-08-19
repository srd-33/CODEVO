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
    <div className="bg-slate-950 min-h-screen text-white">
      <section className="section">
        <div className="container">

          <div className="text-center mb-14">
            <span className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              CODEVO Internship Programs
            </span>

            <h1 className="text-5xl font-bold mt-6">
              Choose Your Domain
            </h1>

            <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-7">
              Industry-oriented virtual internships specially designed for
              VTU Computer Science & Information Technology students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((course) => {
              const Icon = icons[course.icon];

              return (
                <div
                  key={course.slug}
                  className="bg-slate-900 border border-slate-700 rounded-3xl p-7 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-2xl font-bold">
                    {course.title}
                  </h2>

                  <div className="flex items-center gap-2 text-slate-400 mt-3">
                    <Clock size={16} />
                    {course.duration}
                  </div>

                  <p className="text-slate-400 mt-5 leading-7">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {course.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800 text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to={`/internships/${course.slug}`}>
                    <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition">
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