import { whyPoints } from "../data/site";
import { IconLive, IconProfessionals, IconProjects } from "./icons/Icons";

const whyIcons = [IconLive, IconProfessionals, IconProjects];

export default function Why() {
  return (
    <section className="why-page-section">
      <div className="container why-grid">
        <div className="why-points reveal">
          {whyPoints.map((point, index) => {
            const Icon = whyIcons[index] || IconLive;
            return (
              <article className="why-point" key={point.title}>
                <span className="graphic-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </article>
            );
          })}
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
