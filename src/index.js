import "./style.css";
import Background from "./Photoroom.png";

function component() {
  const element = document.createElement("div");
  element.textContent = ["My", "restaurant"].join(" ");
  element.classList.add("hello");

  const mainBackground = new Image();
  mainBackground.src = Background;

  element.appendChild(mainBackground);

  return element;
}

document.body.appendChild(component());
