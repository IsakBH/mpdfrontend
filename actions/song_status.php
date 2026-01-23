<?php
require_once __DIR__ . '/vendor/autoload.php';
require '../connection.php';

$status = $mphpd->status();

echo json_encode($status);