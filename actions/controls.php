<?php
require '../vendor/autoload.php';
require_once '../connection.php';

$mpd_status = $mphpd->status();
$current_song_position = $mpd_status['elapsed'];

if($_GET['action'] === 'pause'){
    $mphpd->player()->pause();
    $playing_status = $mphpd->status(["state"]);
    echo $playing_status;
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
    $pos_after_skip = $current_song_position - 5;
    $mphpd->player()->seek_cur($pos_after_skip);
    echo "Gått bakover 5 sekunder i sangen.";
};

if($_GET['action'] === 'skipforwards'){
    $pos_after_skip = $current_song_position + 5;
    $mphpd->player()->seek_cur($pos_after_skip);
    echo "Gått framover 5 sekunder i sangen..";
}

if($_GET['action'] === 'seektopercent'){
    $percentage = htmlspecialchars($_GET['percent']);

    $skip_to_timestamp = ($percentage * $mpd_status['duration']) / 100;

    $mphpd->player()->seek_cur($skip_to_timestamp);

    echo "hei $percentage + duration" . $mpd_status['duration'] . "+ will skip to $skip_to_timestamp";
}

if($_GET['action'] === 'volumedown'){
    $volume = $mphpd->player()->volume();
    $volume -= 5;
    $mphpd->player()->volume($volume);
    echo $volume;
}

if($_GET['action'] === 'volumeup'){
    $volume = $mphpd->player()->volume();
    $volume += 5;
    $mphpd->player()->volume($volume);
    echo $volume;
}

if($_GET['action'] === "repeat"){
    $new_repeat_status = !$mpd_status['repeat'];
    echo $new_repeat_status;
    $mphpd->player()->repeat($new_repeat_status);
}

// plays a song in the specified position in the queue (called from queue_controls -> play_song())
if($_GET['action'] === "playsong"){
    $song_id = htmlspecialchars($_GET['id']);
    $song_info = $mphpd->queue()->get_id($song_id);
    $mphpd->player()->play($song_info['pos']);
    echo "Now playing song with queue position {$song_info['pos']}";
}

if($_GET['action'] === "playplaylist"){
    $playlist_name = htmlspecialchars($_GET['name']);
    echo $playlist_name;
}