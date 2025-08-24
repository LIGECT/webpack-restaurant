import createMenuItem from "../../../../utils/createMenuItem";
import Tagliatelle from "../../assets/menu-pictures/foods/main-courses/Tagliatelle-al-Tartufo.png";
import Risotto from "../../assets/menu-pictures/foods/main-courses/Risotto-ai-Frutti-di-Mare.png";
import Bistecca from "../../assets/menu-pictures/foods/main-courses/Tagliatelle-al-Tartufo.png";

export default function createMainCourses() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Main Courses";

  subsection.appendChild(heading);

  const tagliatelle = createMenuItem(
    Tagliatelle,
    "Tagliatelle al Tartufo ",
    "Tagliatelle al Tartufo ",
    "Handmade pasta in creamy truffle sauce.",
    "$24"
  );

  const risotto = createMenuItem(
    Risotto,
    "Risotto ai Frutti di Mare",
    "Risotto ai Frutti di Mare",
    "Arborio rice with shrimp, mussels & saffron.",
    "$26"
  );

  const bistecca = createMenuItem(
    Bistecca,
    "Bistecca alla Fiorentina",
    "Bistecca alla Fiorentina",
    "Tuscan-style T-bone steak grilled to perfection.",
    "$48"
  );

  subsection.append(tagliatelle, risotto, bistecca);

  return subsection;
}
