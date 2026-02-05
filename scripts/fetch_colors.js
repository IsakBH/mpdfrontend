import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

const colorThief = new ColorThief();
const playeralbumart = document.getElementById("playeralbumart");
const queue_selector_container = document.getElementById("queue-selector-container");
var r = document.querySelector(':root'); // :root in the stylesheet

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
    r.style.setProperty('--primary-albumart-color', `${color}`);
    r.style.setProperty('--gradient-color-1', `${color}cc`); // 80% opacity
    r.style.setProperty('--gradient-color-2', `${color}ff`); // 100% opacity
    r.style.setProperty('--primary-hover-color', `${color}66`);
    r.style.setProperty('--secondary-hover-color', `${color}33`);
    r.style.setProperty('--hover-transparent-50', `${color}80`);
    r.style.setProperty('--hover-transparent-30', `${color}4d`);
}

let albumart_color = getColor(playeralbumart);
applyColor(albumart_color);