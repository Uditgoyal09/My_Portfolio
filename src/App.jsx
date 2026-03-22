import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import AchievementsPage from "./pages/AchievementsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300/80">404</p>
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Page not found</h1>
      <p className="max-w-xl text-zinc-300">
        The page you requested does not exist anymore or the link is incorrect.
      </p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
