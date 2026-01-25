const progress_bar = document.getElementById('progress-bar');
const progress_container = document.querySelector('.progress-container');

async function update_progress_bar(percentage) {
    if (percentage) {
        progress_bar.style.width = percentage + '%';
    } else {
        const response = await fetch('actions/song_status.php');
        const data = await response.json();
        console.log(data['elapsed'])
    }
}

window.onload = update_progress_bar();
setInterval(update_progress_bar, 1000);

async function skip_to_percentage(percentage) {
    update_progress_bar(percentage);
    fetch('actions/controls.php?action=seektopercent&percent=' + percentage)
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
};

progress_container.addEventListener('click', function (e) {
    const percentage = Math.floor((e.offsetX / progress_container.offsetWidth) * 100);
    console.log(percentage);
    skip_to_percentage(percentage);
})