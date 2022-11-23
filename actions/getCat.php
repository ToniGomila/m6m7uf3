<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        require_once "./createConn.php";
        $conn = getConn();
        $sql = "select * from USER;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $return = array();
        while($row = $stmt->fetch()){
            $object = new stdClass();
            $object->nom = $row[0];
            $object->id = $row[1];
            array_push($return, $object);
        }
        echo json_encode($return);
    } else {
        exit();
    }
?>
