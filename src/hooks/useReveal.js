import { useEffect } from "react";

function isInView(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  return rect.top < vh * 0.92 && rect.bottom > 0 && rect.left < vw && rect.right > 0;
}

export function useReveal(pathname = "") {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    reveals.forEach((el) => {
      if (isInView(el)) {
        el.classList.add("is-visible");
        return;
      }
      el.classList.remove("is-visible");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);
}
