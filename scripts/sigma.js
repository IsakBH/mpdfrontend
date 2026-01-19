//  __  __ ____  ____    _____                _                 _
// |  \/  |  _ \|  _ \  |  ___| __ ___  _ __ | |_ ___ _ __   __| |
// | |\/| | |_) | | | | | |_ | '__/ _ \| '_ \| __/ _ \ '_ \ / _` |
// | |  | |  __/| |_| | |  _|| | | (_) | | | | ||  __/ | | | (_| |
// |_|  |_|_|   |____/  |_|  |_|  \___/|_| |_|\__\___|_| |_|\__,_|

const pausebutton = document.getElementById('pause-button');

pausebutton.addEventListener('click', () => {
    console.log("Bro trykket på pause lol")
    fetch('actions/controls.php?action=pause')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
})