import BannerAside from "../components/BannerAside";
import Gallery from "../components/Gallery";
import PageBanner from "../components/PageBanner";
import Seo from "../components/Seo";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | Prometheus"
        description="See Prometheus coding classes in action — students learning Python, programming, and computer science together."
        path="/gallery"
      />
      <PageBanner
        label="Gallery"
        title="Classroom energy in action"
        lead="Moments from live Prometheus classes — students coding, presenting, and learning together."
        aside={<BannerAside variant="stats" />}
      />
      <Gallery />
    </>
  );
}
