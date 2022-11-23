<?php
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

$pass = md5($pass."asdjosdhf32i3rtfno342npf");

$mysql = new mysqli('127.0.0.1', 'root', 'root', 'register-bd');
$mysql->query("INSERT INTO `users` (`e-mail`, `passwd`) 
VALUES('$email', '$pass')");

$mysql->close();
header('Location: /')
?>
