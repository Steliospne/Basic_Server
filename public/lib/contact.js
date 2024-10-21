import { getImage } from "./scripts.js";

const charId = document.URL.split("?")[1];

const root = document.querySelector(":root");
const colorTheme = charId === "0" ? "crimson" : "sandybrown";

root.style.setProperty("--color-theme", colorTheme);
const links = Array.from(document.getElementsByName("headerLink"));
links.forEach((link) => {
  const url = link.getAttribute("href") + "?" + charId;
  link.setAttribute("href", url);
});

try {
  document.body.style.backgroundImage = `url(${await getImage(
    "/assets/images" + "/konoha_logo.png",
    "image/png"
  )})`;
} catch (error) {
  throw error;
}
