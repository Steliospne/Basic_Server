import { getImage } from "./scripts.js";

try {
  const eyes = document.querySelectorAll(".sharingan");
  const imageURL = await getImage("/sharingan_Triple.png", "image/png");
  eyes.forEach((eye) => {
    eye.style.backgroundImage = `url(${imageURL})`;
  });
} catch (error) {
  throw error;
}
