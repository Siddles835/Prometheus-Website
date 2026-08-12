import { stats } from "../data/site";
import PathRail from "./PathRail";

export default function BannerAside({ variant = "stats", image, imageAlt = "" }) {
  if (variant === "path") {
    return (
      <div className="banner-aside banner-aside--path">
        <p className="banner-aside-label">Your path</p>
        <PathRail />
      </div>
    );
  }

  if (variant === "image" && image) {
    return (
      <figure className="banner-aside banner-aside--image">
        <img src={image} alt={imageAlt} width="960" height="640" loading="eager" />
      </figure>
    );
  }

  return (
    <div className="banner-aside banner-aside--stats" aria-label="Impact">
      <p className="banner-aside-label">By the numbers</p>
      <ul className="banner-stats">
        {stats.map((item) => (
          <li key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
