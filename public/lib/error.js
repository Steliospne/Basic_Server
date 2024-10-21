import { getImage } from "./scripts.js";

try {
  const eyes = document.querySelectorAll(".sharingan");
  const imageURL = await getImage(
    "/assets/images" + "/sharingan_triple.png",
    "image/png"
  );
  eyes.forEach((eye) => {
    eye.style.backgroundImage = `url(${imageURL})`;
  });
} catch (error) {
  throw error;
}
