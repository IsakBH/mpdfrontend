<?php
require '../vendor/autoload.php';
require_once '../connection.php';

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
    $mphpd->player()->previous();
    echo "Gått til forrige sang.";
};

if($_GET['action'] === 'skipforwards'){
    $mphpd->player()->next();
    echo "Gått til neste sang.";
}

?>