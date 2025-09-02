export default function createTeamMember(imageSrc, imageAlt, name, role) {
  const memberCard = document.createElement("div");
  memberCard.classList.add("team-member");

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = imageAlt;
  img.width = 220;
  img.height = 220;
  img.loading = "lazy";

  const memberName = document.createElement("h3");
  memberName.textContent = name;

  const memberRole = document.createElement("p");
  memberRole.textContent = role;

  memberCard.append(img, memberName, memberRole);

  return memberCard;
}
