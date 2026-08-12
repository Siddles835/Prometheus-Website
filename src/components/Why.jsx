import { whyPoints } from "../data/site";
import { IconLive, IconProfessionals, IconProjects } from "./icons/Icons";

const whyIcons = [IconLive, IconProfessionals, IconProjects];

const outcomes = [
  "Python fluency through projects",
  "Confidence presenting technical work",
  "A clear next step into ML or internships",
];

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
          <aside className="why-outcomes">
            <p className="why-outcomes-label">What students leave with</p>
            <ul>
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
        <figure className="why-visual reveal">
          <img
            src="/assets/gallery/gallery-4.jpeg"
            alt="Prometheus students working on projects"
            width="1600"
            height="1013"
            loading="lazy"
          />
          <figcaption>Hands-on projects that turn concepts into real skills.</figcaption>
        </figure>
      </div>
    </section>
  );
}
