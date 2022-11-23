<?php
function getConn()
{
  $servername = "localhost";
  $username = "toni";
  $password = "toni";
  $db = "realstate";

  try {
    $conn = new PDO("mysql:host=$servername;dbname=".$db, $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
  return $conn;
  }
?> 