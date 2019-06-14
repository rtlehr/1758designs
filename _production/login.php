<?php // RAY_ajax_server.php
error_reporting(E_ALL);
date_default_timezone_set('America/Chicago');

// START THE OUTPUT BUFFER TO CAPTURE THE var_dump() DISPLAY
ob_start();

// MAKE THE OUTPUT EASY TO READ
echo '<pre>';

// SEND BACK THE DATE...
echo date('r');
echo  PHP_EOL;

// ... AND THE GET-REQUEST VARIABLES
echo 'GET: ';
var_dump($_GET);

// ... AND THE POST-REQUEST VARIABLES
echo 'POST: ';
var_dump($_POST);

echo '</pre>';
echo  PHP_EOL;

// CAPTURE THE OUTPUT BUFFER
$response = ob_get_clean();

// SEND THE CONTENTS OF THE OUTPUT BUFFER
die($response);

?>