//  __  __ ____  ____    _____                _                 _
// |  \/  |  _ \|  _ \  |  ___| __ ___  _ __ | |_ ___ _ __   __| |
// | |\/| | |_) | | | | | |_ | '__/ _ \| '_ \| __/ _ \ '_ \ / _` |
// | |  | |  __/| |_| | |  _|| | | (_) | | | | ||  __/ | | | (_| |
// |_|  |_|_|   |____/  |_|  |_|  \___/|_| |_|\__\___|_| |_|\__,_|

// MphpD dokumentasjon: https://mphpd.org/latest/overview.html

const pausebutton = document.getElementById('pause-button');
const previousbutton = document.getElementById('previous-button');
const nextbutton = document.getElementById('next-button');

pausebutton.addEventListener('click', () => {
    console.log("Bro trykket på pause lol");
    fetch('actions/controls.php?action=pause')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
})

previousbutton.addEventListener('click', () => {
    console.log("Bro vil høre på forrige sang");
    fetch('actions/controls.php?action=previous')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
})

nextbutton.addEventListener('click', () => {
    console.log("Bro vil høre på neste sang :rofl::rofl::rofl:");
    fetch('actions/controls.php?action=next')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
})