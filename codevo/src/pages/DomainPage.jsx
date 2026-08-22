import { useParams, Link } from "react-router-dom";
import { internships } from "../data/internships";
import {
  Laptop,
  Brain,
  Database,
  Code,
  Shield,
  Cpu,
  CheckCircle,
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

export default function DomainPage() {
  const { slug } = useParams();

  const course = internships.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center transition-colors">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Internship Not Found
        </h1>
      </div>
    );
  }

  const Icon = icons[course.icon];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero */}
      <section className="pt-8 pb-14 lg:pt-10 lg:pb-16">
        <div className="app-container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              CODEVO Internship
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              {course.title}
            </h1>

            <p className="text-gray-600 dark:text-slate-300 mt-5 leading-8">
              {course.description}
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold">{course.duration}</p>
                <p className="text-gray-500 dark:text-slate-400">
                  Duration
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">{course.mode}</p>
                <p className="text-gray-500 dark:text-slate-400">
                  Mode
                </p>
              </div>
            </div>

            <Link to="/register">
              <button className="btn-primary mt-8">
                Register Now
              </button>
            </Link>
          </div>

          {/* Technology Card */}
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl p-8 transition-colors">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 text-white">
              <Icon size={42} />
            </div>

            <h2 className="text-2xl font-bold mb-5">
              Technologies Covered
            </h2>

            <div className="flex flex-wrap gap-3">
              {course.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full text-sm transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="pb-20">
        <div className="app-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            16-Week Learning Roadmap
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {course.weeks.map((week, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    Module {index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-lg">{week}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="pb-24">
        <div className="app-container">
          <h2 className="text-4xl font-bold text-center mb-10">
            What You'll Achieve
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {course.outcomes.map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-5 flex items-center gap-3 transition-colors"
              >
                <CheckCircle className="text-green-500" size={22} />
                <span className="text-gray-700 dark:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <button className="btn-primary px-10">
                Apply for Internship
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}