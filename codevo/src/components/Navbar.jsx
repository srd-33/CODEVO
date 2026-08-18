import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="text-3xl font-black tracking-tight">
          CODEVO
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/internship">Internships</Link>
          <Link to="/support">Support</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/register">
            <button className="btn-primary">
              Register
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}