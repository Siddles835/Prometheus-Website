import { useEffect } from "react";

const SITE_NAME = "Prometheus";
const DEFAULT_TITLE = "Prometheus | Coding & Computer Science Education";
const DEFAULT_DESCRIPTION =
  "Prometheus is a coding education organization helping students learn Python, programming, and computer science through structured curriculum, projects, and live guidance.";
const ORIGIN = "https://prometheuscoding.org";

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
}) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${ORIGIN}${path === "/" ? "/" : path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setCanonical(url);
  }, [title, description, path, type]);

  return null;
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_NAME, ORIGIN };
