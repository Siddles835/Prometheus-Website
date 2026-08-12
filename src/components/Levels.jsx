import { levels } from "../data/site";

export default function Levels() {
  return (
    <section className="levels-page-section">
      <div className="container">
        <div className="levels-grid">
          {levels.map((level) => (
            <article className="level reveal" key={level.num}>
              <span className="level-num">{level.num}</span>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
              <ul className="topics">
                {level.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
