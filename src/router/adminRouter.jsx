import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CopyrightPage from "../pages/CopyrightPage";
import EducationAdd from "../pages/education/EducationAdd";
import EducationPage from "../pages/education/EducationPage";
import EducationUpdate from "../pages/education/EducationUpdate";
import EntrancePage from "../pages/EntrancePage";
import ExperienceAdd from "../pages/experience/ExperienceAdd";
import ExperiencePage from "../pages/experience/ExperiencePage";
import ExperienceUpdate from "../pages/experience/ExperienceUpdate";
import ProjectsAdd from "../pages/projects/ProjectAdd";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ProjectsUpdate from "../pages/projects/ProjectUpdate";

export default function AdminRouter() {
  return (
    <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/entrance" element={<EntrancePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/add" element={<ProjectsAdd />} />
        <Route path="/projects/update/:id" element={<ProjectsUpdate />} />

        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/add" element={<ExperienceAdd />} />
        <Route path="/experience/update/:id" element={<ExperienceUpdate />} />

        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/add" element={<EducationAdd />} />
        <Route path="/education/update/:id" element={<EducationUpdate />} />
        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
    </Routes>
  )
}
