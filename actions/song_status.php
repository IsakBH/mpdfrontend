<?php
require_once __DIR__ . '/vendor/autoload.php';
require '../connection.php';

$status = $mphpd->status();

// get the time elapsed and song duration from the mphpd status
$elapsed = $status['elapsed'];
$duration = $status['duration'];

echo json_encode([
    'elapsed' => $elapsed,
    'duration' => $duration,
    'percent' => ($duration > 0) ? ($elapsed / $duration) * 100 : 0
]);