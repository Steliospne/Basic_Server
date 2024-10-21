import { getImage } from "./scripts.js";
import * as characterAPI from "./data.js";

const heroContainer = document.querySelector(".hero");
const nameContainer = document.querySelector(".name");
const quoteContainer = document.querySelector(".quote > i");
const img = document.createElement("img");
heroContainer?.append(img);

const charId = Math.floor(Math.random() * 2);

const root = document.querySelector(":root");
const colorTheme = charId === 0 ? "crimson" : "sandybrown";

root.style.setProperty("--color-theme", colorTheme);

const links = Array.from(document.getElementsByName("headerLink"));

links.forEach((link) => {
  const url = link.getAttribute("href") + "?" + charId;
  link.setAttribute("href", url);
});

try {
  img.src = await getImage(
    "/assets/images" + characterAPI.getCharacterImg(charId),
    "image/webp"
  );
  document.body.style.backgroundImage = `url(${await getImage(
    "/assets/images" + characterAPI.getAffilLogo(charId),
    "image/jpeg"
  )})`;
} catch (error) {
  throw error;
}

const randomQuote = Math.floor(
  Math.random() * characterAPI.getQuotes(charId).length
);

if (nameContainer !== null) {
  nameContainer.textContent = characterAPI.getName(charId);
}
if (quoteContainer !== null) {
  quoteContainer.textContent = characterAPI.getQuote(charId, randomQuote);
}

heroContainer?.addEventListener("animationend", () => {
  nameContainer?.classList.add("load");
  quoteContainer?.classList.add("load");
});
