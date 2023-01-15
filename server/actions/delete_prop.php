<?php
session_start();
//COMPROBAMOS REQUEST METHOD
if ($_SERVER["REQUEST_METHOD"] != "GET") {
    header("HTTP/1.1 400 Bad Request");
    exit();
}
//COMPROBAMOS SI ID ESTA SETEADA
$id = $_GET["id"];
if (!isset($id) || $id == null) {
    header("HTTP/1.1 400 Bad Request");
    exit();
}
//COMPROBAMOS DATOS USUARIO
if(!isset( $_SESSION['user'])){
    header("HTTP/1.1 400 Bad Request - user");
    exit();
}
$user = unserialize($_SESSION['user']);
if (!is_array($user)) {
    header("HTTP/1.1 400 Bad Request");
    exit();
}
$uid = $user[0];


require_once "./create_conn.php";
$conn = getConn();
$sql = "DELETE FROM PROPIERTY WHERE id=$id and uid=$uid";
$stmt = $conn->prepare($sql);
$stmt->execute();

?>