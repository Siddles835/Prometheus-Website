import Gallery from "../components/Gallery";
import PageBanner from "../components/PageBanner";

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        label="Gallery"
        title="Classroom energy in action"
        lead="Moments from live Prometheus classes — students coding, presenting, and learning together."
      />
      <Gallery />
    </>
  );
}
