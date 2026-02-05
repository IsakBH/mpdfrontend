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
    console.log(`Applying colours to #playeralbumart. Colour: ${color}`);
    r.style.setProperty('--primary-albumart-color', `${color}`);

    console.log(`Applying colours to the progress bar. Colour: ${color}`);
    progress_bar.style.background = `linear-gradient(to right, ${color}cc, ${color}ff)`;
    progress_bar.style.boxShadow = `0 0 15px 2px ${color}CC`

    console.log(`Applying colours to #queue-selector-container. Colour: ${color}`);
    queue_selector_container.style.scrollbarColor = `${color} transparent`;
}

let albumart_color = getColor(playeralbumart);
applyColor(albumart_color);