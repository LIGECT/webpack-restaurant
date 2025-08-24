import Bruschetta from "../../assets/menu-pictures/foods/appetizers/Bruschetta-al-Pomodoro.png";
import Carpaccio from "../../assets/menu-pictures/foods/appetizers/Carpaccio-di-Manzo.png";
import Calamari from "../../assets/menu-pictures/foods/appetizers/Calamari-Fritti.png";
import createMenuItem from "../../../../utils/createMenuItem";

export default function createAppetizers() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Appetizers";

  subsection.appendChild(heading);

  const bruschetta = createMenuItem(
    Bruschetta,
    "Bruschetta al Pomodoro",
    "Bruschetta al Pomodoro",
    "Warm toasted bread topped with fresh tomatoes, basil & a drizzle of extra virgin olive oil.",
    "$9"
  );

  const carpaccio = createMenuItem(
    Carpaccio,
    "Carpaccio di Manzo",
    "Carpaccio di Manzo",
    "Paper-thin beef slices with arugula, parmesan & truffle oil.",
    "$15"
  );

  const calamari = createMenuItem(
    Calamari,
    "Calamari Fritti",
    "Calamari Fritti",
    "Lightly fried calamari with lemon aioli.",
    "$13"
  );

  subsection.append(bruschetta, carpaccio, calamari);

  return subsection;
}
