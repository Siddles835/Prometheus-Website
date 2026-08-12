import { Link } from "react-router-dom";
import { REGISTER_URL, stats } from "../data/site";

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
          <h1>Build the future at Prometheus.</h1>
          <p className="hero-copy">
            Join hundreds of youth innovators shaping the next wave of technology. Participate in
            impactful hackathons to showcase talent and join our classes to learn Python and AI with
            live guidance from industry professionals. Our project-first curriculum empowers students
            to build real-world skills and confidence in coding.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/levels">
              View learning path
            </Link>
            <a
              className="btn btn-primary"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now
            </a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Impact">
          {stats.map((item) => (
            <div className="hero-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
