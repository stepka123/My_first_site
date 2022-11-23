<?php
//Если нажата кнопка "Войти"
$mysql = new mysqli('localhost', 'root', 'root', 'register-bd');

if (isset($GLOBALS['submit']))
{
//Читаем хеш из файла pas.txt
$s=file('pas.txt'); 
//Получаем хеш от пароля, введенного пользователем
$hash=md5($GLOBALS['passwd']);
//Сравниваем хеш пароля и логин с теми.
if (($s[0]==$hash) and ($GLOBALS['login']=='admin'))
{
require_once ("admin.php");
exit;
}
else {
echo "Логин или пароль неверные";
echo "<a href ='http://localhost/1md5.php'>Назад</а>";
exit;
}
}
?>