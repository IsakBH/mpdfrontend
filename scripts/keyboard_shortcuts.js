window.onkeydown = function (e) {
    // skip/seek backwards
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        skipbackwardsbutton.click();
        update_progress_bar();
    }

    // skip/seek forwards
    if (e.key === "ArrowRight") {
        e.preventDefault();
        skipforwardsbutton.click();
        update_progress_bar();
    }

    // volume down
    if (e.key === "ArrowDown") {
        e.preventDefault();
        fetch("actions/controls.php?action=volumedown")
            .then(response => response.text())
            .then(data => {
                volumedisplay.innerHTML = `${data}%`
                console.log("Heisann! Ts er det serveren sier: Volum er skrudd ned med 5%. Volum er nå " + data)
            })
    }

    // volume up
    if (e.key === "ArrowUp") {
        e.preventDefault();
        fetch("actions/controls.php?action=volumeup")
            .then(response => response.text())
            .then(data => {
                volumedisplay.innerHTML = `${data}%`
                console.log("Heisann! Ts er det serveren sier: Volum er skrudd opp med 5%. Volum er nå " + data)
            })
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

    if (e.ctrlKey || e.altKey) {
        return;
    }

    if (e.key === "0") {
        e.preventDefault();
        skip_to_percentage(0);
        update_progress_bar();
    }

    if (e.key === "1") {
        e.preventDefault();
        skip_to_percentage(10);
        update_progress_bar();
    }

    if (e.key === "2") {
        e.preventDefault();
        skip_to_percentage(20);
        update_progress_bar();
    }

    if (e.key === "3") {
        e.preventDefault();
        skip_to_percentage(30);
        update_progress_bar();
    }

    if (e.key === "4") {
        e.preventDefault();
        skip_to_percentage(40);
        update_progress_bar();
    }

    if (e.key === "5") {
        e.preventDefault();
        skip_to_percentage(50);
        update_progress_bar();
    }

    if (e.key === "6") {
        e.preventDefault();
        skip_to_percentage(60);
        update_progress_bar();
    }

    if (e.key === "7") {
        e.preventDefault();
        skip_to_percentage(70);
        update_progress_bar();
    }

    if (e.key === "8") {
        e.preventDefault();
        skip_to_percentage(80);
        update_progress_bar();
    }

    if (e.key === "9") {
        e.preventDefault();
        skip_to_percentage(90);
        update_progress_bar();
    }

    if (e.key === ",") {
        e.preventDefault();
        if (settings_dialog.open) {
            close_settings_button.click();
        } else {
            settings_button.click();
        }
    }
};
