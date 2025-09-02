export default function createIconsItem(iconInfo, iconAlt, title, text) {
  const valueCard = document.createElement("div");
  valueCard.classList.add("value-card");

  const img = document.createElement("img");
  img.classList.add("value-icon");
  img.src = iconInfo;
  img.alt = iconAlt;
  img.width = 64;
  img.height = 64;
  img.loading = "lazy";

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = title;

  const cardText = document.createElement("p");
  cardText.textContent = text;

  valueCard.append(img, cardTitle, cardText);

  return valueCard;
}
