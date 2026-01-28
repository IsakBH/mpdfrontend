//  __  __ ____  ____    _____                _                 _
// |  \/  |  _ \|  _ \  |  ___| __ ___  _ __ | |_ ___ _ __   __| |
// | |\/| | |_) | | | | | |_ | '__/ _ \| '_ \| __/ _ \ '_ \ / _` |
// | |  | |  __/| |_| | |  _|| | | (_) | | | | ||  __/ | | | (_| |
// |_|  |_|_|   |____/  |_|  |_|  \___/|_| |_|\__\___|_| |_|\__,_|

// MphpD dokumentasjon: https://mphpd.org/latest/overview.html

const pausebutton = document.getElementById('pause-button');
const previousbutton = document.getElementById('previous-button');
const nextbutton = document.getElementById('next-button');
const skipbackwardsbutton = document.getElementById('skip-backwards-button');
const skipforwardsbutton = document.getElementById('skip-forwards-button');
const playeralbumart = document.getElementById('playeralbumart');
const repeatbutton = document.getElementById('repeat-button');

// pausing the current song via clicking the pause button
pausebutton.addEventListener('click', () => {
    console.log("Bro trykket på pause lol");
    fetch('actions/controls.php?action=pause')
        .then(response => response.text())
        .then(data => {
            console.log("Heisann! Ts er det serveren sier: " + data)
            if (data === "pause") {
                pausebutton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
            } else {
                pausebutton.innerHTML = "<i class=\"fa-solid fa-pause\">";
            }
        });
});

// pausing the current song via clicking the album art
playeralbumart.addEventListener('click', () => {
    console.log("Bro trykket på pause lol");
    fetch('actions/controls.php?action=pause')
        .then(response => response.text())
        .then(data => {
            console.log("Heisann! Ts er det serveren sier: " + data)
            if (data === "pause") {
                pausebutton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
            } else {
                pausebutton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
            }
        });
});

// going to the previous song in the queue
previousbutton.addEventListener('click', () => {
    console.log("Bro vil høre på forrige sang");
    fetch('actions/controls.php?action=previous')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
});

// going to the next song in the queue
nextbutton.addEventListener('click', () => {
    console.log("Bro vil høre på neste sang :rofl::rofl::rofl:");
    fetch('actions/controls.php?action=next')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
});

// skipping/seeking backwards in the current song
skipbackwardsbutton.addEventListener('click', () => {
    console.log("Bro vil gå bakover?? :DROOFL::DROOFL:");
    fetch('actions/controls.php?action=skipback')
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
    update_progress_bar();
});

// skipping/seeking forwards in the current song
skipforwardsbutton.addEventListener('click', () => {
    console.log("Bro vil gå framover?? :DROOFL::DROOFL:");
    fetch('actions/controls.php?action=skipforwards')
        .then(response => response.text()
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data)));
    update_progress_bar();
});

repeatbutton.addEventListener('click', () => {
    console.log("ROFLROFLROFLROFLROFLROFLROFLROFLROFL bro har lyst til å toggle repeat");
    fetch('actions/controls.php?action=repeat')
        .then(response => response.text()
        .then(data => {
            console.log("Heisann! Ts er det severen sier: " + data)
            if (data === "1") {
                repeatbutton.innerHTML = "<i class=\"fa-solid fa-repeat\"></i>";
            } else {
                repeatbutton.innerHTML = "<i class=\"fa-solid fa-arrows-turn-right\"></i>";
            }
        }));
});