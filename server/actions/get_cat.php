<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        require_once "./create_conn.php";
        $conn = getConn();
        $sql = "select * from CATEGORIA;";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $return = array();
        while($row = $stmt->fetch()){
            $object = new stdClass();
            $object->id = $row[0];
            $object->s_name = $row[1];
            $object->name = $row[2];
            array_push($return, $object);
        }
        header('Content-Type: application/json');
        echo json_encode($return);
    }
?>
