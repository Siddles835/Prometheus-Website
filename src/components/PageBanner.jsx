export default function PageBanner({ label, title, lead }) {
  return (
    <section className="page-banner" aria-label={title}>
      <div className="container page-banner-inner reveal">
        {label ? <p className="section-label">{label}</p> : null}
        <h1 className="page-banner-title">{title}</h1>
        {lead ? <p className="page-banner-lead">{lead}</p> : null}
      </div>
    </section>
  );
}
