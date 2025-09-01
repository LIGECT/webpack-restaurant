import "./values.css";
import Chef from "../assets/icon/chef.png";
import Wine from "../assets/icon/wine-glass.png";
import Fork from "../assets/icon/fork.png";
import Flame from "../assets/icon/flame.png";
import createIconsItem from "../../../utils/createIconsItem";

export default function createValuesSection() {
  const valuesSection = document.createElement("section");
  valuesSection.classList.add("our-values");

  const valuesHead = document.createElement("h2");
  valuesHead.textContent = "Our Values";

  const valuesGrid = document.createElement("div");
  valuesGrid.classList.add("values-grid");

  const chef = createIconsItem(
    Chef,
    "Mastery",
    "Maestria",
    "Our chefs cook as if every dish is a premiere on stage"
  );

  const wine = createIconsItem(
    Wine,
    "Elegance",
    "Eleganza",
    "We believe a glass of wine and the right presentation make an evening perfect"
  );

  const fork = createIconsItem(
    Fork,
    "Tradition",
    "Tradizione",
    "Classic Italian recipes are our foundation, to which we add a modern touch"
  );

  const flame = createIconsItem(
    Flame,
    "Passion",
    "Passione",
    "Every dish is created with love, energy, and attention to detail"
  );

  valuesGrid.append(chef, wine, fork, flame);

  valuesSection.append(valuesHead, valuesGrid);
  return valuesSection;
}
