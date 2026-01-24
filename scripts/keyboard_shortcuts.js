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

    // pause
    if (e.key === " ") {
        e.preventDefault();
        pausebutton.click();
    }
}