import { getImage } from "./scripts.js";

const heroContainer = document.querySelector(".hero");
const img = document.createElement("img");

heroContainer?.append(img);

async function test() {
  img.src = await getImage("/Deva_Path.webp", "image/webp");
  document.body.style.backgroundImage = `url(${await getImage(
    "/akatsuki_logo.jpeg",
    "image/jpeg"
  )})`;
}

test();
