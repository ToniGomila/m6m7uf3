<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["id"])) {
        $id = $_GET["id"];
        require_once "./create_conn.php";
        $conn = getConn();
        $sql = "select * from SUBCATEGORIA where cID = $id;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $return = array();
        while($row = $stmt->fetch()){
            $object = new stdClass();
            $object->id = $row[0];
            $object->sName = $row[1];
            array_push($return, $object);
        }
        header('Content-Type: application/json');
        echo json_encode($return);
    }
    
} else {
    exit();
}
?>