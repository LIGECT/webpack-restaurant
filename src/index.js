import "./style.css";
import createBurgerMenu from "./utils/burgerMenu";
import { loadPage, pages } from "./utils/pageLoader";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

homeButton.addEventListener("click", () =>
  loadPage(pages["home-button"].component, pages["home-button"].class)
);
menuButton.addEventListener("click", () =>
  loadPage(pages["menu-button"].component, pages["menu-button"].class)
);
aboutButton.addEventListener("click", () =>
  loadPage(pages["about-button"].component, pages["about-button"].class)
);

loadPage(pages["home-button"].component, pages["home-button"].class, false);

createBurgerMenu();
