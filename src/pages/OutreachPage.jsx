import Outreach from "../components/Outreach";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";

export default function OutreachPage() {
  return (
    <>
      <Seo
        title="Curriculum Development & Outreach | Prometheus"
        description="Join Prometheus curriculum development and organization outreach — help design CS curriculum and build partnerships with education organizations."
        path="/outreach"
      />
      <PageBanner
        label="Outreach"
        title="Curriculum development &amp; organization outreach"
        lead="Contribute to curriculum design and outreach that helps education organizations strengthen computer science programming."
      />
      <Outreach />
    </>
  );
}
