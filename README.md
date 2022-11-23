# My_first_site - is my start in developer's world.

I've used MAMP free version for add registration form and connect database (phpMyAdmin). 
Nametable: users, column: 
                        id(prim key),
                        e-mail(varchar),
                        passwd(varchar).
                        
Connect via locat network:
  $user = 'root';
  $password = 'root';
  $db = 'inventory';
  $host = 'localhost';
  $port = 3306;

  $link = mysqli_init();
  $success = mysqli_real_connect(
     $link,
     $host,
     $user,
     $password,
     $db,
     $p
