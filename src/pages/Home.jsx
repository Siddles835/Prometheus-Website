import BrandIntro from "../components/BrandIntro";
import FinalCta from "../components/FinalCta";
import Hero from "../components/Hero";
import HomePathways from "../components/HomePathways";
import Seo from "../components/Seo";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <Sponsors />
      <BrandIntro />
      <HomePathways />
      <FinalCta />
    </>
  );
}
