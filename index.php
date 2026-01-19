<?php
require_once 'connection.php';

$status = $mphpd->status();

echo $status["state"], "<br> <br>";

foreach($status as $detsomskjer){
    echo $detsomskjer;
}

$mphpd->player()->pause();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title> Isak B. Henriksen </title>
    <link rel="icon" href="../Pictures/Tux.svg.png">
    <script src="../Javascript/toggle.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">

    <!-- Open Graph meta-tagger -->
    <meta property="og:title" content="Isak Henriksen">
    <meta property="og:description" content="MPD Frontend skrevet i PHP.">
    <meta property="og:image" content="https://isak.brunhenriksen.no/Pictures/selfie.jpg">
    <meta property="og:url" content="https://isak.brunhenriksen.no">
    <meta property="og:type" content="website">
</head>

<body>

</body>

</html>