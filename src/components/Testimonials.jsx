import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What learners say</h2>
          <p className="section-lead">Families and students on the Prometheus experience.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote className="testimonial reveal" key={item.attribution}>
              <p>“{item.quote}”</p>
              <footer>{item.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
