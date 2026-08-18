import {
  UserPlus,
  MessageCircle,
  Video,
  FolderUp,
  Award,
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={28} />,
    title: "Register",
    desc: "Submit your name & email to enroll.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Join WhatsApp",
    desc: "Receive all updates and meeting links.",
  },
  {
    icon: <Video size={28} />,
    title: "Attend Webinars",
    desc: "Learn through live industry sessions.",
  },
  {
    icon: <FolderUp size={28} />,
    title: "Submit Tasks",
    desc: "Upload projects through Google Drive.",
  },
  {
    icon: <Award size={28} />,
    title: "Get Certificate",
    desc: "Download your internship certificate.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Process
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            How CODEVO Works
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A simple internship journey designed for VTU students.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                {step.icon}
              </div>

              <div className="mt-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-blue-200 dark:bg-blue-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}