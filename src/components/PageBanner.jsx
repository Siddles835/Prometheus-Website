import { FlameMark, OrbitGraphic } from "./icons/Icons";

export default function PageBanner({ label, title, lead }) {
  return (
    <section className="page-banner" aria-label={title}>
      <div className="page-banner-art" aria-hidden="true">
        <img src="/assets/graphics/banner-grid.svg" alt="" className="page-banner-grid" />
        <OrbitGraphic className="page-banner-orbit" />
        <FlameMark className="page-banner-flame" />
      </div>
      <div className="container page-banner-inner reveal">
        {label ? <p className="section-label">{label}</p> : null}
        <h1 className="page-banner-title">{title}</h1>
        {lead ? <p className="page-banner-lead">{lead}</p> : null}
      </div>
    </section>
  );
}
