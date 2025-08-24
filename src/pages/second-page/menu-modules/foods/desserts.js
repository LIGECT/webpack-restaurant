import createMenuItem from "../../../../utils/createMenuItem";
import Tiramisu from "../../assets/menu-pictures/foods/desserts/Tiramisù-Classico.png";
import PannaCota from "../../assets/menu-pictures/foods/desserts/Panna-Cotta-alla-Vaniglia.png";
import Cannoli from "../../assets/menu-pictures/foods/desserts/Cannoli-Siciliani.png";

export default function createDesserts() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Desserts";

  subsection.appendChild(heading);

  const tiramisu = createMenuItem(
    Tiramisu,
    "Tiramisù Classico",
    "Tiramisù Classico",
    "Layers of espresso-soaked ladyfingers & mascarpone cream.",
    "$10"
  );

  const pannaCota = createMenuItem(
    PannaCota,
    "Panna Cotta alla Vaniglia",
    "Panna Cotta alla Vaniglia",
    "Silky vanilla cream with berry coulis.",
    "$9"
  );

  const cannoli = createMenuItem(
    Cannoli,
    "Cannoli Siciliani",
    "Cannoli Siciliani",
    "Crisp pastry shells filled with sweet ricotta & pistachio.",
    "$11"
  );

  subsection.append(tiramisu, pannaCota, cannoli);

  return subsection;
}
