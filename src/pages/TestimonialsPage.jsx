import BannerAside from "../components/BannerAside";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";
import Testimonials from "../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials | Prometheus"
        description="What learners and families say about Prometheus coding classes, Python learning, and computer science education."
        path="/testimonials"
      />
      <PageBanner
        label="Testimonials"
        title="What learners say"
        lead="Families and students on the Prometheus experience."
        aside={<BannerAside variant="stats" />}
      />
      <Testimonials />
    </>
  );
}
