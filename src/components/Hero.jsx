import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" aria-label="Prometheus introduction">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/assets/gallery/gallery-1.jpeg"
          alt=""
          width="1600"
          height="950"
          fetchPriority="high"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-main">
          <img
            className="hero-logo"
            src="/assets/brand/prometheus-hero-badge.png"
            alt="Prometheus"
            width="180"
            height="180"
          />
          <h1>Prometheus</h1>
          <p className="hero-tagline">Curriculum partnerships &amp; education outreach</p>
          <p className="hero-copy">
            Prometheus partners with organizations to design computer science curriculum and expand
            educational outreach — helping schools, nonprofits, and programs strengthen CS
            offerings through collaboration, frameworks, and shared events.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/curriculum">
              See curriculum partnerships
            </Link>
            <Link className="btn btn-primary" to="/outreach">
              Explore outreach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
