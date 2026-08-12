import { gallery } from "../data/site";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
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
