import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import CurriculumPage from "./pages/CurriculumPage";
import HackathonPage from "./pages/HackathonPage";
import Home from "./pages/Home";
import OutreachPage from "./pages/OutreachPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route path="hackathons" element={<HackathonPage />} />
          <Route path="hackathon" element={<Navigate to="/hackathons" replace />} />
          <Route path="internships" element={<Navigate to="/outreach" replace />} />
          <Route path="python" element={<Navigate to="/curriculum" replace />} />
          <Route path="gallery" element={<Navigate to="/" replace />} />
          <Route path="testimonials" element={<Navigate to="/" replace />} />
          <Route path="why" element={<Navigate to="/about" replace />} />
          <Route path="levels" element={<Navigate to="/curriculum" replace />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
