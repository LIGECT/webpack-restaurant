import "./style.css";
import Background from "./Photoroom.png";

function component() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to  Lumino";
  const mainBackground = new Image();
  mainBackground.classList.add("main-background");
  // mainBackground.src = Background;
  content.appendChild(mainBackground);
  content.appendChild(heading);
  return content;
}

document.body.appendChild(component());
