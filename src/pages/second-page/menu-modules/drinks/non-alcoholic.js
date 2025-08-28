import createMenuItem from "../../../../utils/createMenuItem";
import Pellegrino from "../../assets/menu-pictures/drinks/non-alcoholic/San-Pellegrino-Limonata.webp";
import Acqua from "../../assets/menu-pictures/drinks/non-alcoholic/Acqua-Panna.webp";
import Juice from "../../assets/menu-pictures/drinks/non-alcoholic/Fresh-Blood-Orange-Juice.webp";

export default function createNonAlcoholic() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Non-Alcoholic";

  subsection.appendChild(heading);

  const pellegrino = createMenuItem(
    Pellegrino,
    "San Pellegrino Limonata",
    "San Pellegrino Limonata",
    "Sparkling lemon beverage, refreshing & zesty.",
    "$5"
  );

  const acqua = createMenuItem(
    Acqua,
    "Acqua Panna",
    "Acqua Panna",
    "Still Tuscan spring water.",
    "$4"
  );

  const juice = createMenuItem(
    Juice,
    "Fresh Blood Orange Juice",
    "Fresh Blood Orange Juice",
    "Vibrant, naturally sweet & tangy.",
    "$6"
  );

  subsection.append(pellegrino, acqua, juice);

  return subsection;
}
