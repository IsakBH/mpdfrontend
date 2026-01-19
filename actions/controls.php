<?php
require '../vendor/autoload.php';
require_once '../connection.php';

if($_GET['action'] === 'pause'){
    $mphpd->player()->pause();
    $playing_status = $mphpd->status(["state"]);
    echo "Pause er toggled. Status er nå: $playing_status";
}

?>