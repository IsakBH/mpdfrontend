<?php
require_once 'connection.php';

$status = $mphpd->status();
?>

<!doctype html>
<html lang="en">

<head>
    <title> Isak B. Henriksen </title>
    <link rel="icon" href="../Pictures/Tux.svg.png">
    <script src="../Javascript/toggle.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/player.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
    <meta charset="utf-8">

    <!-- Open Graph meta-tagger -->
    <meta property="og:title" content="Isak Henriksen">
    <meta property="og:description" content="MPD Frontend skrevet i PHP.">
    <meta property="og:image" content="https://isak.brunhenriksen.no/Pictures/selfie.jpg">
    <meta property="og:url" content="https://isak.brunhenriksen.no">
    <meta property="og:type" content="website">
</head>

<body>
    <button id="previous-button"><i class="fa-solid fa-backward-step"></i></button>
    <button id="skip-backwards-button"><i class="fa-solid fa-arrow-rotate-left"></i></button>
    <button id="pause-button"><i class="fa-solid fa-pause"></i></button>
    <button id="skip-forwards-button"><i class="fa-solid fa-arrow-rotate-right"></i></button>
    <button id="next-button"><i class="fa-solid fa-forward-step"></i></button>

    <?php
    $current_song = $mphpd->player()->current_song();
    $uri = $current_song['file'];

    $binaryart =$binaryart = $mphpd->db()->read_picture($uri);

    if ($binaryart) {
        $base64 = base64_encode($binaryart);
        echo '<img class="albumart" id="playeralbumart" src="data:image/jpeg;base64,' . $base64 . '" alt="Album Art" />';
    }
    else {
        echo '<img src="assets/placeholder.png" <br>';
    }

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
</body>

</html>