import {
  Code2,
  BrainCircuit,
  Database,
  LaptopMinimal,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const domains = [
  {
    slug: "web-development",
    icon: <LaptopMinimal size={34} />,
    title: "Web Development",
    tech: "React • Node • MongoDB",
  },
  {
    slug: "ai-ml",
    icon: <BrainCircuit size={34} />,
    title: "Artificial Intelligence",
    tech: "Python • ML • OpenCV",
  },
  {
    slug: "data-science",
    icon: <Database size={34} />,
    title: "Data Science",
    tech: "Pandas • SQL • Power BI",
  },
  {
    slug: "java-full-stack",
    icon: <Code2 size={34} />,
    title: "Java Full Stack",
    tech: "Spring • Java • MySQL",
  },
  {
    slug: "cyber-security",
    icon: <ShieldCheck size={34} />,
    title: "Cyber Security",
    tech: "Ethical Hacking • Linux",
  },
  {
    slug: "python",
    icon: <Cpu size={34} />,
    title: "Python Development",
    tech: "Automation • APIs",
  },
];

export default function Domains() {
  return (
    <section
      id="internships"
      className="section bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="app-container">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Internship Programs
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            Choose Your Domain
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Industry-oriented virtual internships specially designed for
            Computer Science & Information Technology students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {domains.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {item.tech}
              </p>

              <Link to={`/internships/${item.slug}`}>
  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:translate-x-1 transition">
    View Program →
  </button>
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}