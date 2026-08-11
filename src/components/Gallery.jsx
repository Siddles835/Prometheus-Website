import { gallery } from "../data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">Gallery</p>
          <h2 className="section-title">Classroom energy in action</h2>
          <p className="section-lead">
            Moments from live Prometheus classes — students coding, presenting, and learning
            together.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`reveal${item.className ? ` ${item.className}` : ""}`} key={item.src}>
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
