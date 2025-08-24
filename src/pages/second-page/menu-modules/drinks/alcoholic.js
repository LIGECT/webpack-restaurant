import createMenuItem from "../../../../utils/createMenuItem";
import Chianti from "../../assets/menu-pictures/drinks/alcoholic/Chianti-Classico-DOCG.png";
import Prosecco from "../../assets/menu-pictures/drinks/alcoholic/Prosecco-di-Valdobbiadene.png";
import Negroni from "../../assets/menu-pictures/drinks/alcoholic/Negroni.png";

export default function createAlcoholic() {
  const subsection = document.createElement("div");
  subsection.classList.add("subsection");

  const heading = document.createElement("h4");
  heading.textContent = "Alcoholic";

  subsection.appendChild(heading);

  const chianti = createMenuItem(
    Chianti,
    "Chianti Classico, DOCG",
    "Chianti Classico, DOCG",
    "Robust Tuscan red wine with cherry & spice notes.",
    "$12 / glass"
  );

  const prosecco = createMenuItem(
    Prosecco,
    "Prosecco di Valdobbiadene",
    "Prosecco di Valdobbiadene",
    "Crisp sparkling wine with apple & floral aromas.",
    "$11 / glass"
  );

  const negroni = createMenuItem(
    Negroni,
    "Negroni",
    "Negroni",
    "Classic Italian aperitivo with gin, Campari & vermouth.",
    "$14"
  );

  subsection.append(chianti, prosecco, negroni);

  return subsection;
}
