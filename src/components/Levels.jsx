import { levels } from "../data/site";

export default function Levels() {
  return (
    <section id="levels">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Learning path</p>
          <h2 className="section-title">Join our classes</h2>
          <p className="section-lead">
            A clear path from first lines of Python to confident work with real data structures.
          </p>
        </div>
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
