<?php
if (!$_SERVER["REQUEST_METHOD"] == "GET") {
    exit();
}elseif(!isset($_GET["id"])){
    exit();
}
$rID = $_GET["id"];
require_once "./create_conn.php";
$conn = getConn();
$sql = "select * from PROPIERTY where ID = $rID;";
$stmt = $conn->prepare($sql);
$stmt->execute();
$object = new stdClass();
while($row = $stmt->fetch()){
    $object->id = $row[0];
    $object->title = $row[1];
    $object->description = $row[2];
    $object->action = $row[3];
    $object->price = $row[4];
    $object->cat = $row[5];
    $object->subcat = $row[6];
    $object->pos = $row[7];
    $object->headImg = $row[8];
}
if ($object == new stdClass()) {
    header("HTTP/1.0 404 Not Found");
}
$array = array();
$sql = "select path from IMAGES where ID = $rID;";
$stmt = $conn->prepare($sql);
$stmt->execute();
while($row = $stmt->fetch()){
    array_push($array, $row[0]);
}
$object->imgs = $array;
//header('Content-Type: application/json');
//echo json_encode($object);
?>