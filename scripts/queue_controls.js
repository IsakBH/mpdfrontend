function play_song(id){
    console.log(id);
    fetch('actions/controls.php?action=playsong&id=' + id)
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier " + data))
}

