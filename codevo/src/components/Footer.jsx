// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="app-container text-center">
//         <h3 className="text-2xl font-bold">CODEVO</h3>
//         <p className="mt-2 text-gray-400">
//           Bengaluru, Karnataka
//         </p>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="app-container py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">CODEVO</h2>
            <p className="mt-2 text-sm">
              Virtual Internship Platform for IT Students
            </p>
          </div>

         <div className="flex flex-col gap-2 text-sm items-start">
  <Link
    to="/about"
    className="hover:underline underline-offset-4 transition"
  >
    About
  </Link>

  <Link
    to="/support"
    className="hover:underline underline-offset-4 transition"
  >
    Contact
  </Link>

  <Link
    to="/privacy"
    className="hover:underline underline-offset-4 transition"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms"
    className="hover:underline underline-offset-4 transition"
  >
    Terms & Conditions
  </Link>
</div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm">
          © {new Date().getFullYear()} CODEVO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}