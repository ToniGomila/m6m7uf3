<?php
/*REMOTE USER 
  $servername = "bbdd.tonigomila.cat";
  $username = "ddb195234";
  $password = "aB@1toni";
  $db = "ddb195234";
*/
/*LOCAL DB
$servername = "localhost";
  $username = "toni";
  $password = "toni";
  $db = "realstate";
*/
function getConn()
{
  $servername = "bbdd.tonigomila.cat";
  $username = "ddb195234";
  $password = "aB@1toni";
  $db = "ddb195234";

  try {
    $conn = new PDO("mysql:host=$servername;port=3306;dbname=".$db, $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
  return $conn;
  }
?> 