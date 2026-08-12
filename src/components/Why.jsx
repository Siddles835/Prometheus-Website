import { whyPoints } from "../data/site";

export default function Why() {
  return (
    <section className="why-page-section">
      <div className="container why-grid">
        <div className="why-points reveal">
          {whyPoints.map((point) => (
            <article className="why-point" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
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
