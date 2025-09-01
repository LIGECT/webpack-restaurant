import "./about.css";
import createHistorySection from "./about-us-modules/createHistorySection";
import createValuesSection from "./about-us-modules/createValuesSection";

export default function createAboutPage() {
  const fragment = document.createDocumentFragment();

  const heroSection = document.createElement("header");
  heroSection.classList.add("about-header");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "History of Taste and Light";

  heroSection.append(heading, subtitle);
  const historySection = createHistorySection();
  const valuesSection = createValuesSection();

  fragment.append(heroSection, historySection, valuesSection);
  return fragment;
}
