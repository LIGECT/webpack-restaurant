import "./team.css";
import createTeamMember from "../../../utils/createTeamMember";
import Elena from "../assets/avatar/Elena-Ferraro.webp";
import Luca from "../assets/avatar/Luca-Bianchi.webp";
import Marco from "../assets/avatar/Marco-Ricci.webp";
import Maria from "../assets/avatar/Maria-Rossi.webp";

export default function createTeamSection() {
  const teamSection = document.createElement("section");
  teamSection.classList.add("team");

  const teamHead = document.createElement("h2");
  teamHead.textContent = "Team";

  const valuesGrid = document.createElement("div");
  valuesGrid.classList.add("team-grid");

  const elena = createTeamMember(
    Elena,
    "Female, 28, in a black dress, smiling",
    "Elena Ferraro",
    "Dining Room Manager: creates the very special atmosphere of the evening"
  );

  const luca = createTeamMember(
    Luca,
    "Male, 35, in uniform",
    "Luca Bianchi",
    "Sous Chef: ensures the kitchen runs perfectly"
  );

  const marco = createTeamMember(
    Marco,
    "Male, 40, with a neat beard",
    "Marco Ricci",
    "Pastry Chef: every dessert is like a small work of art"
  );

  const maria = createTeamMember(
    Maria,
    "Female, 30s, strictly elegant",
    "Maria Rossi",
    "Sommelier: selects wines that make you fall in love from the first sip"
  );

  valuesGrid.append(elena, luca, marco, maria);

  teamSection.append(teamHead, valuesGrid);
  return teamSection;
}
