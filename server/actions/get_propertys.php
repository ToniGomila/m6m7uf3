<?php
require_once "./create_conn.php";
$conn = getConn();
$sql = "select ID,title, description, price, cat, headImg, action from PROPIERTY ORDER BY ID desc;";
$stmt = $conn->prepare($sql);
$stmt->execute();
$return = array();
while($row = $stmt->fetch()){
    $object = new stdClass();
    $object->id = $row[0];
    $object->title = $row[1];
    $object->description = $row[2];
    $object->price = $row[3];
    $object->cat = $row[4];
    $object->img = $row[5];
    $object->action = $row[6];
    array_push($return, $object);
}
header('Content-Type: application/json');
echo json_encode($return);
?>