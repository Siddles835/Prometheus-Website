import BannerAside from "../components/BannerAside";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import Why from "../components/Why";

export default function WhyPage() {
  return (
    <>
      <Seo
        title="Why Prometheus"
        description="Why students choose Prometheus for coding and computer science education — live guidance, professional instructors, and a project-first curriculum."
        path="/why"
      />
      <PageBanner
        label="Why Prometheus"
        title="A student-first coding experience with structure and support."
        lead="Our curriculum is designed for young learners who want to move from beginner concepts to real Python projects with confidence."
        aside={
          <BannerAside
            variant="image"
            image="/assets/gallery/gallery-2.jpeg"
            imageAlt="Prometheus classroom session"
          />
        }
      />
      <Why />
    </>
  );
}
