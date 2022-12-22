<?php
$rID = $_GET["id"];
require_once "./create_conn.php";
$conn = getConn();
$sql = "select * from PROPIERTY where ID = $rID;";
$stmt = $conn->prepare($sql);
$stmt->execute();
$return = array();
$row = $stmt->fetch();
$object = new stdClass();
$object->id = $row[0];
$object->title = $row[1];
$object->description = $row[2];
$object->action = $row[3];
$object->price = $row[4];
$object->cat = $row[5];
$object->subcat = $row[6];
$object->pos = $row[7];
$object->headImg = $row[8];

$array = array();
$conn = getConn();
$sql = "select path from IMAGES where ID = $propertyID;";
$stmt = $conn->prepare($sql);
$stmt->execute();
while($row = $stmt->fetch()){
    array_push($array, $row[0]);
}
$object->imgs = $array;

header('Content-Type: application/json');
echo json_encode($object);
?>