<?php
require_once '../connection.php';
$file = $_GET['file'];
$binaryart = $mphpd->db()->read_picture($file);

if ($binaryart) {
    header("Content-Type: image/jpeg");
    echo $binaryart;
} else {
    echo "assets/placeholder.png";
}
exit;