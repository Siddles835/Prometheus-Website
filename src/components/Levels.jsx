import { levels } from "../data/site";
import { IconAdvanced, IconCode, IconMl } from "./icons/Icons";

const levelIcons = [IconCode, IconAdvanced, IconMl];

export default function Levels() {
  return (
    <section className="levels-page-section">
      <div className="container">
        <div className="levels-grid">
          {levels.map((level, index) => {
            const Icon = levelIcons[index] || IconCode;
            return (
              <article className="level reveal" key={level.num}>
                <span className="graphic-icon graphic-icon--level" aria-hidden="true">
                  <Icon />
                </span>
                <span className="level-num">{level.num}</span>
                <h3>{level.title}</h3>
                <p>{level.description}</p>
                <ul className="topics">
                  {level.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
