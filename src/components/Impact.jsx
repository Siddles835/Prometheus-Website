import { stats } from "../data/site";

export default function Impact() {
  return (
    <section className="impact" aria-label="Impact">
      <div className="container">
        <div className="impact-panel reveal">
          {stats.map((item) => (
            <div className="impact-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
