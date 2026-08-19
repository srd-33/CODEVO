// import { useParams, Link } from "react-router-dom";
// import { internships } from "../data/internships";
// import {
//   Laptop,
//   Brain,
//   Database,
//   Code,
//   Shield,
//   Cpu,
//   CheckCircle,
//   Clock,
// } from "lucide-react";

// const icons = {
//   Laptop,
//   Brain,
//   Database,
//   Code,
//   Shield,
//   Cpu,
// };

// export default function DomainPage() {
//   const { slug } = useParams();

//   const course = internships.find((item) => item.slug === slug);

//   if (!course) {
//     return (
//       <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
//         <h1 className="text-3xl font-bold">Internship Not Found</h1>
//       </div>
//     );
//   }

//   const Icon = icons[course.icon];

//   return (
//     <div className="bg-slate-950 min-h-screen text-white">
//       <section className="section">
//         <div className="container grid lg:grid-cols-2 gap-12 items-center">

//           <div>
//             <span className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
//               CODEVO Internship
//             </span>

//             <h1 className="text-5xl font-bold mt-6">
//               {course.title}
//             </h1>

//             <p className="text-slate-400 mt-6 leading-8">
//               {course.description}
//             </p>

//             <div className="flex gap-8 mt-8">
//               <div>
//                 <p className="text-3xl font-bold">{course.duration}</p>
//                 <p className="text-slate-500">Duration</p>
//               </div>

//               <div>
//                 <p className="text-3xl font-bold">{course.mode}</p>
//                 <p className="text-slate-500">Mode</p>
//               </div>
//             </div>

//             <Link to="/register">
//               <button className="btn-primary mt-10">
//                 Register Now
//               </button>
//             </Link>
//           </div>

//           <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
//             <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
//               <Icon size={42} />
//             </div>

//             <h2 className="text-2xl font-bold mb-5">
//               Technologies Covered
//             </h2>

//             <div className="flex flex-wrap gap-3">
//               {course.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="bg-slate-800 text-blue-300 px-3 py-2 rounded-full text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       <section className="pb-24">
//         <div className="container">

//           <h2 className="text-4xl font-bold text-center mb-12">
//             16-Week Learning Roadmap
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {course.weeks.map((week, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <Clock className="text-blue-400" size={20} />
//                   <span className="text-blue-400 font-semibold">
//                     Module {index + 1}
//                   </span>
//                 </div>

//                 <h3 className="font-bold text-lg">
//                   {week}
//                 </h3>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <section className="pb-24">
//         <div className="container">

//           <h2 className="text-4xl font-bold text-center mb-10">
//             What You'll Achieve
//           </h2>

//           <div className="grid md:grid-cols-2 gap-5">
//             {course.outcomes.map((item) => (
//               <div
//                 key={item}
//                 className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex items-center gap-3"
//               >
//                 <CheckCircle className="text-green-400" size={22} />
//                 {item}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link to="/register">
//               <button className="btn-primary px-10">
//                 Apply for Internship
//               </button>
//             </Link>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }

// export default function DomainPage() {
//   return (
//     <div className="min-h-screen bg-red-600 flex items-center justify-center">
//       <h1 className="text-6xl font-bold text-white">
//         DOMAIN PAGE
//       </h1>
//     </div>
//   );
// }

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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Internship Not Found</h1>
      </div>
    );
  }

  const Icon = icons[course.icon];

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="bg-blue-900/40 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              CODEVO Internship
            </span>

            <h1 className="text-5xl font-bold mt-6">
              {course.title}
            </h1>

            <p className="text-slate-400 mt-6 leading-8">
              {course.description}
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold">{course.duration}</p>
                <p className="text-slate-500">Duration</p>
              </div>

              <div>
                <p className="text-3xl font-bold">{course.mode}</p>
                <p className="text-slate-500">Mode</p>
              </div>
            </div>

            <Link to="/register">
              <button className="btn-primary mt-10">
                Register Now
              </button>
            </Link>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
              <Icon size={42} />
            </div>

            <h2 className="text-2xl font-bold mb-5">
              Technologies Covered
            </h2>

            <div className="flex flex-wrap gap-3">
              {course.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-blue-300 px-3 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="container">

          <h2 className="text-4xl font-bold text-center mb-12">
            16-Week Learning Roadmap
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {course.weeks.map((week, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-semibold">
                    Module {index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-lg">
                  {week}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="container">

          <h2 className="text-4xl font-bold text-center mb-10">
            What You'll Achieve
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {course.outcomes.map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex items-center gap-3"
              >
                <CheckCircle className="text-green-400" size={22} />
                {item}
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