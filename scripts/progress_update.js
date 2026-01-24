const progress_bar = document.getElementById('progress-bar');

async function update_progress_bar() {
    const response = await fetch('actions/song_status.php');
    const data = await response.json();
    console.log(data['elapsed'])

    progress_bar.style.width = data.percent + '%';
}

setInterval(update_progress_bar, 1000);