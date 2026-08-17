import BannerAside from "../components/BannerAside";
import Internships from "../components/Internships";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";

export default function InternshipsPage() {
  return (
    <>
      <Seo
        title="Internships | Prometheus"
        description="Intern at Prometheus and help expand coding and computer science education for youth."
        path="/internships"
      />
      <PageBanner
        label="Internships"
        title="Intern at Prometheus"
        lead="Want to help teach coding, support programs, and grow with a nonprofit building the next generation of tech talent?"
        aside={<BannerAside variant="stats" />}
      />
      <Internships />
    </>
  );
}
