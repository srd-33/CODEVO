import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Support from "./pages/Support";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Internships from "./pages/Internships";
import DomainPage from "./pages/DomainPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminSettings from "./pages/AdminSettings";
import AdminDocuments from "./pages/AdminDocuments";

import { ThemeProvider } from "./context/ThemeContext";


export default function App() {
  return (
   <ThemeProvider>
    <BrowserRouter>
     <ScrollToTop />  
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/internships" element={<Internships />} />
<Route path="/internships/:slug" element={<DomainPage />} />
<Route
  path="/admin/settings"
  element={<AdminSettings />}
/>
 
  <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/student/dashboard" element={<StudentDashboard />} />
<Route path="/admin/documents" element={<AdminDocuments />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}