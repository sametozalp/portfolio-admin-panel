import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import EntrancePage from "../pages/EntrancePage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";

export default function AdminRouter() {
  return (
    <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/entrance" element={<EntrancePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
