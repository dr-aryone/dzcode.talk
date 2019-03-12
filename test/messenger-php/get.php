<?php
/* to show errors manually in php */
ini_set('assert.exception', 1);
ini_set('zend.assertions', 1);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new mysqli("localhost", "root", "", "messenger");
if ($db->connect_error) {
    die("couldnt connect to db");
}
