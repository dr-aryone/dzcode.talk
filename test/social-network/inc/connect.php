<?php
ini_set('assert.exception', 1);
ini_set('zend.assertions', 1);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli("localhost", "root", "", "findfriends");
if ($db->connect_error){
  die();
}