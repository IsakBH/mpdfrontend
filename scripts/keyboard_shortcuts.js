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
}