<?php
require_once __DIR__ . "/vendor/autoload.php";
use FloFaber\MphpD\MphpD;
use FloFaber\MphpD\MPDException;

$mphpd = new MphpD([
  "host" => "127.0.0.1",
  "port" => 6767,
  "timeout" => 5
]);

try{
  $mphpd->connect();
}catch (MPDException $e){
  echo $e->getMessage();
  return false;
}