<?php
  $f_open = fopen("stat.txt","r+");
  $count = fgets($f_open);

  header("Access-Control-Allow-Origin: http://www.diablorip.com");
  header("Access-Control-Allow-Credentials:true");
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');

  if($_GET['sum']) {
    echo $count;
  } else {
    if(empty($_COOKIE['diablo_count'])){
      setcookie("diablo_count", 1, time() + (365 * 24 * 3600));
      $count = $count + 1;
      rewind($f_open);
      fwrite($f_open,$count);
      fclose($f_open);
      echo '1';
    }else {
      echo '0';
    }
  }
?>