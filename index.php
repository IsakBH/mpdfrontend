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
    <button id="pause-button"><i class="fa-solid fa-pause"></i></button> <br>

    <?php
        echo $status["state"], "<br> <br>";

        foreach($status as $detsomskjer){
            echo $detsomskjer;
        }

    ?>
<script src='scripts/sigma.js'></script>
</body>

</html>