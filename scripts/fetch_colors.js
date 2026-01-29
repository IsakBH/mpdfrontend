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

function applyColor(color) {
    console.log(`Applying box-shadow to #playeralbumart. Color: ${color}`);
    playeralbumart.style.boxShadow = `0px 0px 10px ${color}`;
}

let albumart_color = getColor(playeralbumart);
applyColor(albumart_color);