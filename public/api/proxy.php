<?php
$config = json_decode(file_get_contents("./config.json"), true);
$user=$config["user"];
$password=$config["password"];

$mode = $_GET["mode"];
$content = file_get_contents("php://input");

$opts = array('http' =>
array(
    'method'  => 'POST',
    'header'  => 'Content-Type: application/x-www-form-urlencoded',
    'content' => $content
    )
);
$context  = stream_context_create($opts);

echo file_get_contents("https://" . $user . ":" . $password . "@api.elemer.es/carmesyes/routes/proxy.php?port=8000&id=2&mode=" . $mode, false, $context);
