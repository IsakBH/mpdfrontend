<?php
require '../vendor/autoload.php';
require_once '../connection.php';

$mpd_status = $mphpd->status();
$current_song_position = $mpd_status['elapsed'];

if($_GET['action'] === 'pause'){
    $mphpd->player()->pause();
    $playing_status = $mphpd->status(["state"]);
    echo "Pause er toggled. Status er nå: $playing_status";
};

if($_GET['action'] === 'previous'){
    $mphpd->player()->previous();
    echo "Gått til forrige sang.";
};

if($_GET['action'] === 'next'){
    $mphpd->player()->next();
    echo "Gått til neste sang.";
}

if($_GET['action'] === 'skipback'){
    $mphpd->player()->seek($current_song_position, -5);
    echo "Gått bakover 5 sekunder i sangen.";
};

if($_GET['action'] === 'skipforwards'){
    $mphpd->player()->seek($current_song_position, +5);
    echo "Gått til neste sang.";
}
