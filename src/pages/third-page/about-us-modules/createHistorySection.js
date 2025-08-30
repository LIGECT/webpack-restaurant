import ChiefImage from "../assets/boss.webp";
import Inspiration from "../assets/inspiration.webp";

export default function createHistorySection() {
  const historySection = document.createElement("section");
  historySection.classList.add("our-history");

  const imgChief = document.createElement("img");
  imgChief.src = ChiefImage;
  imgChief.alt =
    "A confident Italian man in his 40s in a white uniform with golden embroidery.";
  imgChief.classList.add("our-history__image");
  imgChief.classList.add("our-history__image--1");

  const historyBlock = document.createElement("div");
  historyBlock.classList.add("history-block");

  const titleHistory = document.createElement("h2");
  titleHistory.textContent = "Our Philosophy";

  const upperTextHistory = document.createElement("p");
  upperTextHistory.textContent =
    "Our restaurant was born from a dream to unite classic Italian cuisine with an atmosphere of coziness and elegance. Every dish here is a journey into the heart of Italy, where pasta is made by hand, sauces are simmered for hours, and wine is chosen to perfectly complement every moment.";

  const lowerTextHistory = document.createElement("p");
  lowerTextHistory.textContent =
    "Lumino is a place where candles flicker, soft music plays, and time slows down, allowing you to savor the true art of taste.";

  historyBlock.append(titleHistory, upperTextHistory, lowerTextHistory);

  const inspirationBlock = document.createElement("div");
  inspirationBlock.classList.add("inspiration-block");

  const titleInspiration = document.createElement("h2");
  titleInspiration.textContent = "Our Inspiration";

  const textInspiration = document.createElement("p");
  textInspiration.textContent =
    "We are inspired by light that creates an atmosphere. Every room at Lumino has details that make an evening special: candles on the tables, white walls with golden frames, and large windows that reveal the city lights. This is not just a restaurant — it is a setting for your memories.";

  const imgInspiration = document.createElement("img");
  imgInspiration.src = Inspiration;
  imgInspiration.alt =
    "Restaurant interior with a table set with flowers and candles, against a window showing the city lights. The walls are white with gold accents.";
  imgInspiration.classList.add("our-history__image");
  imgInspiration.classList.add("our-history__image--2");

  inspirationBlock.append(titleInspiration, textInspiration);

  historySection.append(
    imgChief,
    historyBlock,
    inspirationBlock,
    imgInspiration
  );
  return historySection;
}
