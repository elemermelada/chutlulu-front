<?php
$config = json_decode(file_get_contents("config.json"), true);
$user=$config["user"];
$password=$config["password"];

$mode = $_GET["mode"];
$input = $_GET["input"];

echo file_get_contents("https://" . $user . ":" . $password . "@api.elemer.es/carmesyes/routes/proxy_request.php?port=8000&id=2&mode=" . $mode . "&input=" . $input);
