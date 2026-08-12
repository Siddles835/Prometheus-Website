import Internships from "../components/Internships";
import PageBanner from "../components/PageBanner";

export default function InternshipsPage() {
  return (
    <>
      <PageBanner
        label="Internships"
        title="Intern at Prometheus"
        lead="Want to help teach coding, support programs, and grow with a nonprofit building the next generation of tech talent?"
      />
      <Internships />
    </>
  );
}
