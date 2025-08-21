import "./face-style.css";

export default function component() {
  const fragment = document.createDocumentFragment();

  const heading = document.createElement("h1");
  const subheading = document.createElement("h2");
  const bodyText = document.createElement("p");
  bodyText.classList.add("body-text");

  heading.textContent = "Welcome to  Lumino";
  subheading.textContent =
    "Where contemporary elegance meets the timeless art of Italian cuisine.";
  bodyText.textContent =
    "At Lumino, dining is not just a meal — it’s an experience. Our chefs create each dish with passion, precision, and respect for the ingredients. From the first bite to the last sip, we aim to immerse you in a journey of flavors that linger in memory.";

  fragment.append(heading, subheading, bodyText);
  return fragment;
}
