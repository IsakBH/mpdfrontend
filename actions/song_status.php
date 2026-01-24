<?php
require '../vendor/autoload.php';
require_once '../connection.php';
header('Content-Type: application/json');

$status = $mphpd->status();

// get the time elapsed and song duration from the mphpd status
$elapsed = $status['elapsed'] ?? 0;
$duration = $status['duration'] ?? 0;

echo json_encode([
    'elapsed' => (float)$elapsed,
    'duration' => (float)$duration,
    'percent' => ($duration > 0) ? ($elapsed / $duration) * 100 : 0
]);