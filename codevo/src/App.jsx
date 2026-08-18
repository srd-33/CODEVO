import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Support from "./pages/Support";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import Internship from "./pages/Internship";
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
         <Route path="/internship" element={<Internship />} />
  <Route
    path="/internship/web-development"
    element={<Internship />}
  />   
  <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}