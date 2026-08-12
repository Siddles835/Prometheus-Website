import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
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
