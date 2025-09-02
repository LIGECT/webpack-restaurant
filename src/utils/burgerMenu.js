import { loadPage, pages } from "./pageLoader";

export default function createBurgerMenu() {
  const burger = document.createElement("div");
  burger.classList.add("burger");

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span");
    burger.appendChild(line);
  }

  const navWrapper = document.createElement("div");
  navWrapper.classList.add("burger-nav");

  const overlay = document.createElement("div");
  overlay.classList.add("burger-overlay");

  const nav = document.querySelector("nav");
  if (nav) {
    nav.querySelectorAll("button").forEach((btn) => {
      const clone = btn.cloneNode(true);
      const pageInfo = pages[btn.id];
      if (pageInfo) {
        clone.addEventListener("click", () => {
          navWrapper.classList.remove("open");
          burger.classList.remove("open");
          overlay.classList.remove("open");
          loadPage(pageInfo.component, pageInfo.class);
        });
      }
      navWrapper.appendChild(clone);
    });
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navWrapper.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  overlay.addEventListener("click", () => {
    burger.classList.remove("open");
    navWrapper.classList.remove("open");
    overlay.classList.remove("open");
  });

  document.body.appendChild(burger);
  document.body.appendChild(navWrapper);
  document.body.appendChild(overlay);
}
