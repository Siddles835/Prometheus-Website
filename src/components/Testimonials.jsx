import { testimonials } from "../data/site";
import { QuoteMark } from "./icons/Icons";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote className="testimonial reveal" key={item.attribution}>
              <span className="quote-mark" aria-hidden="true">
                <QuoteMark />
              </span>
              <p>“{item.quote}”</p>
              <footer>{item.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
