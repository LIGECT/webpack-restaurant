import Face from "../pages/first-page/face";
import Menu from "../pages/second-page/menu";
import About from "../pages/third-page/about";

const contentDiv = document.getElementById("content");

function clearBody() {
  contentDiv.innerHTML = "";
}

export function loadPage(pageComponent, pageClass, withTransition = true) {
  if (
    document.body.classList.contains(pageClass) ||
    (withTransition && document.body.classList.contains("is-transitioning"))
  ) {
    return;
  }

  const changePageContent = () => {
    clearBody();
    document.body.className = "";
    document.body.classList.add(pageClass);
    contentDiv.appendChild(pageComponent());
  };

  if (withTransition) {
    document.body.classList.add("is-transitioning");
    setTimeout(() => {
      changePageContent();
      requestAnimationFrame(() => {
        document.body.classList.remove("is-transitioning");
      });
    }, 500);
  } else {
    changePageContent();
  }
}

export const pages = {
  "home-button": { component: Face, class: "page-home" },
  "menu-button": { component: Menu, class: "page-menu" },
  "about-button": { component: About, class: "page-about" },
};
