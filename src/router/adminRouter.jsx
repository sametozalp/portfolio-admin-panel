import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import EntrancePage from "../pages/EntrancePage";
import LoginPage from "../pages/LoginPage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";

export default function AdminRouter() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/entrance" element={<EntrancePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
