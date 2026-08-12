import PageBanner from "../components/PageBanner";
import Testimonials from "../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        label="Testimonials"
        title="What learners say"
        lead="Families and students on the Prometheus experience."
      />
      <Testimonials />
    </>
  );
}
