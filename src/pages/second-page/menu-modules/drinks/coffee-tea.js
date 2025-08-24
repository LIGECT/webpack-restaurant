import createMenuItem from "../../../../utils/createMenuItem";
import Espresso from "../../assets/menu-pictures/drinks/coffee-&-tea/Espresso.png";
import Cappuccino from "../../assets/menu-pictures/drinks/coffee-&-tea/Cappuccino.png";
import Tea from "../../assets/menu-pictures/drinks/coffee-&-tea/Chamomile-Tea.png";

export default function createCoffeeTea() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Coffee & Tea";

  subsection.appendChild(heading);

  const espresso = createMenuItem(
    Espresso,
    "Espresso",
    "Espresso",
    "Rich & intense, straight from the Italian heart.",
    "$4"
  );

  const cappuccino = createMenuItem(
    Cappuccino,
    "Cappuccino",
    "Cappuccino",
    "Perfect milk foam with a bold espresso shot.",
    "$5"
  );

  const tea = createMenuItem(
    Tea,
    "Chamomile Tea",
    "Chamomile Tea",
    "Gentle floral infusion for a calm evening.",
    "$4"
  );

  subsection.append(espresso, cappuccino, tea);

  return subsection;
}
