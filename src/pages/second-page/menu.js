import "./menu-style.css";

export default function createMenuPage() {
  const fragment = document.createDocumentFragment();

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const placeholder = document.createElement("p");
  placeholder.textContent = "Menu items will be listed here soon!";

  fragment.append(heading, placeholder);
  return fragment;
}
