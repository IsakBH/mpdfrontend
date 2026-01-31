const progress_bar = document.getElementById('progress-bar');
const progress_container = document.querySelector('.progress-container');
const time_display = document.getElementById('time-display');
let is_dragging = false;

async function update_progress_bar(percentage) {
    if (percentage) {
        progress_bar.style.width = percentage + '%';
        const response = await fetch('actions/song_status.php');
        const data = await response.json();
        time_display.innerText = `${format_time(data.elapsed)} / ${format_time(data.duration)}`
    } else {
        const response = await fetch('actions/song_status.php');
        const data = await response.json();
        //console.log(`${format_time(data.elapsed)} / ${format_time(data.duration)}`);
        progress_bar.style.width = data.percent + '%';
        time_display.innerText = `${format_time(data.elapsed)} / ${format_time(data.duration)}`;
    }
}

function format_time(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

window.onload = update_progress_bar();
setInterval(update_progress_bar, 1000);

async function skip_to_percentage(percentage) {
    update_progress_bar(percentage);
    fetch('actions/controls.php?action=seektopercent&percent=' + percentage)
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
};

progress_container.addEventListener('mousedown', function (e) {
    const percentage = Math.floor((e.offsetX / progress_container.offsetWidth) * 100);
    console.log(percentage);
    skip_to_percentage(percentage);
    is_dragging = true;
})

progress_container.addEventListener('mousemove', function (e) {
    const percentage = Math.floor((e.offsetX / progress_container.offsetWidth) * 100);
    console.log(percentage);
    if (is_dragging === true) {
        skip_to_percentage(percentage);
    }
})

progress_container.addEventListener('mouseup', function (e) {
    is_dragging = false;
})

progress_container.addEventListener('mouseout', function (e) {
    is_dragging = false;
})