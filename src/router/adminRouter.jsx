import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import EducationPage from "../pages/EducationPage";
import EntrancePage from "../pages/EntrancePage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";

export default function AdminRouter() {
  return (
    <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/entrance" element={<EntrancePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
