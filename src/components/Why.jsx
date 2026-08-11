import { whyPoints } from "../data/site";

export default function Why() {
  return (
    <section id="why">
      <div className="container why-grid">
        <div className="reveal">
          <p className="section-label">Why Prometheus</p>
          <h2 className="section-title">
            A student-first coding experience with structure and support.
          </h2>
          <p className="section-lead">
            Our curriculum is designed for young learners who want to move from beginner concepts to
            real Python projects with confidence.
          </p>
        </div>
        <div className="why-points reveal">
          {whyPoints.map((point) => (
            <article className="why-point" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container why-visual-wrap">
        <figure className="why-visual reveal">
          <img
            src="/assets/gallery/gallery-2.jpeg"
            alt="Prometheus classroom session with today’s roadmap on screen"
            width="1600"
            height="815"
            loading="lazy"
          />
          <figcaption>Live sessions with structured roadmaps and real coaching.</figcaption>
        </figure>
      </div>
    </section>
  );
}
