import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GalleryPage from "./pages/GalleryPage";
import Home from "./pages/Home";
import InternshipsPage from "./pages/InternshipsPage";
import LevelsPage from "./pages/LevelsPage";
import NotFound from "./pages/NotFound";
import TestimonialsPage from "./pages/TestimonialsPage";
import WhyPage from "./pages/WhyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why" element={<WhyPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="levels" element={<LevelsPage />} />
          <Route path="internships" element={<InternshipsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
