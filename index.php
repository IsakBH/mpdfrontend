<?php
require_once 'connection.php';

$status = $mphpd->status();
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Kjedelige ting -->
    <title> MPD Frontend </title>
    <link rel="icon" href="../Pictures/Tux.svg.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles/player.css">
    <link rel="stylesheet" href="styles/progress_bar.css">
    <link rel="stylesheet" href="styles/album_art.css">
    <link rel="stylesheet" href="styles/queue_container.css">

    <!-- Fonter og ikoner -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />

    <!-- Open Graph meta-tagger -->
    <meta property="og:title" content="Isak Henriksen">
    <meta property="og:description" content="MPD Frontend skrevet i PHP.">
    <meta property="og:image" content="https://isak.brunhenriksen.no/Pictures/selfie.jpg">
    <meta property="og:url" content="https://isak.brunhenriksen.no">
    <meta property="og:type" content="website">
</head>

<body>
    <div id="main-container">
        <div id="player-interact-container">
            <?php
            $current_song = $mphpd->player()->current_song();
            if ($current_song) {
                $uri = $current_song['file'];
                $current_song_album = $current_song['album'] ?? "Unknown album";
            } else {
                echo "It seems you're not playing anything.";
            }
            $binaryart = $binaryart = $mphpd->db()->read_picture($uri);
            if ($binaryart) {
                $base64 = base64_encode($binaryart);
                echo "<img class=\"albumart\" id=\"playeralbumart\" src=\"data:image/jpeg;base64,$base64\" alt=\"Album Art\" />";
            } else {
                echo '<img src="assets/placeholder.png" <br>';
            }
            ?>
            <div id="song-information">
                <p id="song-title"><?php echo $current_song['title']; ?></p>
                <p id="song-artist"><?php echo $current_song['artist'] . " ––– " . $current_song_album ?></p>
            </div>
            <div class="progress-container">
                <div id="progress-bar"></div>
            </div>
            <div id="time-display">0:00 / 0:00</div>
            <br>

            <div id="player-button-div">
                <button id="previous-button"><i class="fa-solid fa-backward-step"></i></button>
                <button id="skip-backwards-button"><i class="fa-solid fa-arrow-rotate-left"></i></button>
                <button id="pause-button"><?php echo $status['state'] === "play" ? "<i class=\"fa-solid fa-pause\">" : "<i class=\"fa-solid fa-play\">"; ?></i></button>
                <button id="skip-forwards-button"><i class="fa-solid fa-arrow-rotate-right"></i></button>
                <button id="next-button"><i class="fa-solid fa-forward-step"></i></button>
                <button id="volume-button"><i class="fa-solid fa-volume-high"></i></button>
                <button id="repeat-button"><?php echo $status['repeat'] === 1 ? "<i class=\"fa-solid fa-repeat\"></i>" : "<i class=\"fa-solid fa-arrows-turn-right\"></i>"; ?></button>
            </div>
        </div>
    </div>

    <div id="queue-selector-container">
        <?php
        $queue = $mphpd->queue()->get();
        foreach ($queue as $queue_song) {
            foreach ($queue_song as $song) {
                echo $song;
            }
        }
        ?>
    </div>

    <?php
    echo $status["state"], "<br> <br>";

    foreach ($current_song as $song) {
        echo $song, "<br>";
    }

    foreach ($status as $detsomskjer) {
        echo $detsomskjer;
    }
    echo "<br> <br>";
    print_r(array_keys($current_song));
    echo "<br>";
    print_r(array_keys($status));
    echo "<br>", $status['elapsed'];
    ?>
    <script src='scripts/player_controls.js'></script>
    <script src='scripts/keyboard_shortcuts.js'></script>
    <script src='scripts/progress_update.js'></script>
    <script type='module' src='scripts/fetch_colors.js'></script>
</body>

</html>