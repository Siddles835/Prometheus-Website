import { Link } from "react-router-dom";
import { HACKATHON_URL, hackathon } from "../data/site";
import { IconBuild, IconImpact, IconMl } from "./icons/Icons";

const highlightIcons = [IconBuild, IconMl, IconImpact];

export default function HackathonHighlight() {
  return (
    <section className="hackathon-highlight" aria-label="AI and Machine Learning Hackathon">
      <div className="container">
        <div className="hackathon-panel reveal">
          <div className="hackathon-copy">
            <p className="section-label">{hackathon.eyebrow}</p>
            <h2 className="section-title">{hackathon.title}</h2>
            <p className="hackathon-name">{hackathon.name}</p>
            <p className="section-lead">{hackathon.summary}</p>
            <p className="hackathon-body">{hackathon.body}</p>
            <div className="hackathon-actions">
              <a
                className="btn btn-primary"
                href={HACKATHON_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hackathon.registerLabel}
              </a>
              <Link className="btn btn-dark" to="/hackathon">
                {hackathon.detailsLabel}
              </Link>
            </div>
          </div>

          <ul className="hackathon-points">
            {hackathon.highlights.map((item, index) => {
              const Icon = highlightIcons[index] || IconMl;
              return (
                <li key={item.title}>
                  <span className="graphic-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
