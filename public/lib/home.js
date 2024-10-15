import { getImage } from "./scripts.js";
import * as characterAPI from "./data.js";

const heroContainer = document.querySelector(".hero");
const nameContainer = document.querySelector(".name");
const quoteContainer = document.querySelector(".quote > i");
const img = document.createElement("img");

heroContainer?.append(img);

const charId = 0;

try {
  img.src = await getImage(characterAPI.getCharacterImg(charId), "image/webp");
  document.body.style.backgroundImage = `url(${await getImage(
    "/akatsuki_logo.jpeg",
    "image/jpeg"
  )})`;
} catch (error) {
  throw new error();
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
