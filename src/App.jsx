import Footer from "./components/Footer";
import FinalCta from "./components/FinalCta";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
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
        <Impact />
        <Sponsors />
        <Why />
        <Gallery />
        <Levels />
        <Testimonials />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
