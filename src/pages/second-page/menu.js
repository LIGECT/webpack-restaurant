import "./menu-style.css";
import createAppetizers from "./menu-modules/foods/appetizers";
import createMainCourses from "./menu-modules/foods/main-courses";

export default function createMenuPage() {
  const fragment = document.createDocumentFragment();

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menu = document.createElement("div");
  menu.classList.add("menu-wrapper");

  //FOOD
  const sectionFood = document.createElement("div");
  sectionFood.classList.add("menu-section", "food");
  const headingFood = document.createElement("h2");
  headingFood.textContent = "FOOD";

  sectionFood.appendChild(headingFood);
  sectionFood.append(createAppetizers(), createMainCourses());

  // DRINK
  const sectionDrink = document.createElement("div");
  sectionDrink.classList.add("menu-section", "drink");
  const headingDrink = document.createElement("h2");
  headingDrink.textContent = "DRINKS";
  sectionDrink.appendChild(headingDrink);

  menu.append(sectionFood, sectionDrink);

  fragment.append(heading, menu);
  return fragment;
}
