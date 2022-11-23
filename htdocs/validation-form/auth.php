<?php


function authCheck(string $email,string $pass){
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

$pass = md5($pass."");

$mysql = new mysqli('localhost', 'root', 'root', 'register-bd');

$result = $mysql->query("SELECT * FROM `users` WHERE 
`e-mail` = '$email' AND `pass` = '$pass'");
$user = $result->fetch_assoc();

foreach($result as $result) { 
    if ($email === $result['email'] && $pass === $result['pass']){
        return true;
    }
    return false;
}
if (authCheck($email,$pass)){
    setcookie('email', $user['e-mail'], time() + 3600, "/");
    setcookie('pass', $user['password'], time() + 3600, "/");
    header('Location: /');
}
else{
    echo "Такого пользователя не было найдено";
    exit();
}

$mysql->close();
header('Location: /');
}
?>