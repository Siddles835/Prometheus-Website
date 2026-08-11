import { REGISTER_URL } from "../data/site";

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
        <img
          className="hero-logo"
          src="/assets/brand/prometheus-hero-badge.png"
          alt="Prometheus"
          width="220"
          height="220"
        />
        <h1>Build the future at Prometheus.</h1>
        <p className="hero-copy">
          Join hundreds of youth innovators shaping the next wave of technology. Participate in
          impactful hackathons to showcase talent and join our classes to learn Python and AI with
          live guidance from industry professionals. Our project-first curriculum empowers students
          to build real-world skills and confidence in coding.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#levels">
            View learning path
          </a>
          <a
            className="btn btn-ghost"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register now
          </a>
        </div>
      </div>
    </section>
  );
}
