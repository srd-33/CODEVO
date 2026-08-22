import { GraduationCap, Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section className="pt-10 pb-16">
        <div className="app-container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              About CODEVO
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              CODEVO is a virtual internship platform helping VTU Computer
              Science & Information Technology students gain practical industry
              experience through live webinars, projects and mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card
              icon={<Target className="text-blue-600" />}
              title="Our Mission"
              text="Bridge the gap between classroom learning and real-world software development."
            />

            <Card
              icon={<Users className="text-blue-600" />}
              title="Who We Serve"
              text="VTU students pursuing Computer Science, Information Technology and related engineering domains."
            />

            <Card
              icon={<GraduationCap className="text-blue-600" />}
              title="Learning Approach"
              text="Live industry webinars, structured weekly roadmap, practical assignments and mentorship."
            />

            <Card
              icon={<Award className="text-blue-600" />}
              title="Certification"
              text="Students receive a personalized internship certificate after successful completion."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-7">{text}</p>
    </div>
  );
}