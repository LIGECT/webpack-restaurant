export default function createMenuItem(
  imageInfo,
  imageAlt,
  name,
  description,
  price
) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = imageInfo.src;
  img.srcset = imageInfo.srcSet;

  img.sizes = "80px";

  img.alt = imageAlt;
  img.loading = "lazy";

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const itemName = document.createElement("h4");
  itemName.textContent = name;

  const itemDesc = document.createElement("p");
  itemDesc.textContent = description;

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("price");
  itemPrice.textContent = price;

  itemInfo.append(itemName, itemDesc, itemPrice);
  menuItem.append(img, itemInfo);

  return menuItem;
}
