import { animate, stagger } from "framer-motion";

export function applyAnimations() {
  const section = document.querySelector("section");
  const links = document.querySelectorAll("a");
  const icons = document.querySelectorAll(".icon");

  // Anima la sección principal
  if (section) {
    animate(section, { opacity: [0, 1], y: [-50, 0] }, { duration: 0.8 });
  }

  // Anima los enlaces al pasar el mouse
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      animate(link, { scale: 1.05 }, { duration: 0.2 });
    });

    link.addEventListener("mouseleave", () => {
      animate(link, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Anima los íconos al aparecer
  if (icons.length > 0) {
    animate(icons, { opacity: [0, 1], x: [-20, 0] }, { delay: stagger(0.2), duration: 0.5 });
  }
}
