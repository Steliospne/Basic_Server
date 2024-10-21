import * as characterAPI from "./data.js";
import { getImage } from "./scripts.js";

const title = document.querySelector(".title");
const backstoryContainer = document.querySelector(".backstory");
const wikiLink = document.querySelector(".wiki");

const charId = document.URL.split("?")[1];

const root = document.querySelector(":root");
const colorTheme = charId === "0" ? "crimson" : "sandybrown";

root.style.setProperty("--color-theme", colorTheme);
console.log(charId);
const links = Array.from(document.getElementsByName("headerLink"));
links.forEach((link) => {
  const url = link.getAttribute("href") + "?" + charId;
  link.setAttribute("href", url);
});

try {
  document.body.style.backgroundImage = `url(${await getImage(
    "/assets/images" + characterAPI.getAffilLogo(charId),
    "image/jpeg"
  )})`;
} catch (error) {
  throw error;
}

if (title !== null) {
  title.textContent = `${characterAPI.getName(charId)}'s Backstory`;
}

if (backstoryContainer !== null) {
  const paragraphs = characterAPI.getBackstory(charId).split("\n");
  paragraphs.map((paragraph) => {
    const paragraphEle = document.createElement("p");
    paragraphEle.textContent = paragraph;
    backstoryContainer.append(paragraphEle);
  });
}

if (wikiLink !== null) {
  wikiLink.setAttribute("href", characterAPI.getWikiURL(charId));
  wikiLink.textContent += " " + characterAPI.getWikiURL(charId);
}
