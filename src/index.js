import "./style.css";
import Face from "./pages/first-page/face";
import Menu from "./pages/second-page/menu";
// import About from "./pages/third-page/about";

const contentDiv = document.getElementById("content");

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
// const aboutButton = document.getElementById("about-button");

function clearBody() {
  contentDiv.innerHTML = "";
}

function loadPage(pageComponent, pageClass, withTransition = true) {
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

homeButton.addEventListener("click", () => loadPage(Face, "page-home"));
menuButton.addEventListener("click", () => loadPage(Menu, "page-menu"));
// homeButton.addEventListener("click", () => loadPage(About));

// contentDiv.appendChild(Face());
loadPage(Face, "page-home", false);
