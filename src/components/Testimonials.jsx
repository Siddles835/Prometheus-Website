import { Link } from "react-router-dom";
import { REGISTER_URL, testimonials } from "../data/site";
import { QuoteMark } from "./icons/Icons";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-layout">
          <blockquote className="testimonial testimonial--featured reveal">
            <span className="quote-mark" aria-hidden="true">
              <QuoteMark />
            </span>
            <p>“{featured.quote}”</p>
            <footer>{featured.attribution}</footer>
          </blockquote>

          <div className="testimonial-side">
            {rest.map((item) => (
              <blockquote className="testimonial reveal" key={item.attribution}>
                <span className="quote-mark" aria-hidden="true">
                  <QuoteMark />
                </span>
                <p>“{item.quote}”</p>
                <footer>{item.attribution}</footer>
              </blockquote>
            ))}
            <aside className="testimonial-cta reveal">
              <p className="banner-aside-label">Your turn</p>
              <h3>Start building with Prometheus.</h3>
              <p>Free classes, live mentors, and a clear path from Python to ML.</p>
              <div className="testimonial-cta-actions">
                <a
                  className="btn btn-primary"
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register now
                </a>
                <Link className="btn btn-dark" to="/levels">
                  View levels
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
