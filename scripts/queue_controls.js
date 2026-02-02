function play_song(id){
    console.log(id);
    fetch('actions/controls.php?action=playsong&id=' + id)
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier " + data))

    document.querySelectorAll('#queue-selector-container li').forEach(song => {
        song.classList.remove('active-song');
    });

    // legg til active-document på dokumentet brukeren vil ha det på
    const active_song = document.querySelector(`.query_selector_container li:has(.queue-song[onclick="play_song(${id})"])`);
    if (active_song) {
        active_song.classList.add('active-song');
    }
}

