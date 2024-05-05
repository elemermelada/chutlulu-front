<?php
$config = json_decode(file_get_contents("./config.json"), true);
$user=$config["user"];
$password=$config["password"];

$mode = $_GET["mode"];
$input = $_POST["input"];

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-Type: application/x-www-form-urlencoded',
        'content' => $_POST
    )
);
$context  = stream_context_create($opts);

echo file_get_contents("https://" . $user . ":" . $password . "@api.elemer.es/carmesyes/routes/proxy_request.php?port=8000&id=2&mode=" . $mode . "&input=" . $input, false, $context);
