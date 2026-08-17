import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import CurriculumPage from "./pages/CurriculumPage";
import GalleryPage from "./pages/GalleryPage";
import Home from "./pages/Home";
import InternshipsPage from "./pages/InternshipsPage";
import NotFound from "./pages/NotFound";
import PythonPage from "./pages/PythonPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import WhyPage from "./pages/WhyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="python" element={<PythonPage />} />
          <Route path="why" element={<WhyPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="levels" element={<Navigate to="/curriculum" replace />} />
          <Route path="internships" element={<InternshipsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
