import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

const colorThief = new ColorThief();
const playeralbumart = document.getElementById("playeralbumart");

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

function getColor(image) {
    if (image.complete) {
        let color = colorThief.getColor(image);
        let hex_color = rgbToHex(color[0], color[1], color[2]);
        return hex_color;
    } else {
        image.addEventListener("load", function () {
            let color = colorThief.getColor(image);
            let hex_color = rgbToHex(color[0], color[1], color[2]);
            return hex_color;
        });
    }
}

// let albumart_color = getColor(playeralbumart);
// console.log(albumart_color);

window.onload = getColor(playeralbumart);