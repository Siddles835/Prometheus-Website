import Footer from "./components/Footer";
import FinalCta from "./components/FinalCta";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Internships from "./components/Internships";
import Levels from "./components/Levels";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Sponsors />
        <Why />
        <Gallery />
        <Levels />
        <Internships />
        <Testimonials />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
