async function skip_to_percentage(percentage) {
    fetch('actions/controls.php?action=seektopercent&percent=' + percentage)
        .then(response => response.text())
        .then(data => console.log("Heisann! Ts er det serveren sier: " + data));
    update_progress_bar();
};

window.onkeydown = function (e) {
    // skip/seek backwards
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        skipbackwardsbutton.click();
    }

    // skip/seek forwards
    if (e.key === "ArrowRight") {
        e.preventDefault();
        skipforwardsbutton.click();
    }

    // going to the previous song
    if (e.key === "k") {
        e.preventDefault();
        previousbutton.click();
    }

    // going to the next song
    if (e.key === "j") {
        e.preventDefault();
        nextbutton.click();
    }

    // pause
    if (e.key === " ") {
        e.preventDefault();
        pausebutton.click();
    }

    if (e.key === "0") {
        e.preventDefault();
        skip_to_percentage(0);
    }

    if (e.key === "1") {
        e.preventDefault();
        skip_to_percentage(10);
    }

    if (e.key === "2") {
        e.preventDefault();
        skip_to_percentage(20);
    }

    if (e.key === "3") {
        e.preventDefault();
        skip_to_percentage(30);
    }

    if (e.key === "4") {
        e.preventDefault();
        skip_to_percentage(40);
    }

    if (e.key === "5") {
        e.preventDefault();
        skip_to_percentage(50);
    }

    if (e.key === "6") {
        e.preventDefault();
        skip_to_percentage(60);
    }

    if (e.key === "7") {
        e.preventDefault();
        skip_to_percentage(70);
    }

    if (e.key === "8") {
        e.preventDefault();
        skip_to_percentage(80);
    }

    if (e.key === "9") {
        e.preventDefault();
        skip_to_percentage(90);
    }
}