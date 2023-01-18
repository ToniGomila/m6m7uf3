<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST["propTitle"]) || empty($_POST["propTitle"])) {
        surt();
    }elseif (!isset($_POST["propDesc"]) || empty($_POST["propDesc"])) {
        surt();
    }elseif (!isset($_POST["propAccion"]) || empty($_POST["propAccion"])) {
        surt();
    }elseif (!isset($_POST["propPrice"]) || empty($_POST["propPrice"])) {
        surt();
    }elseif (!isset($_POST["propPos"]) || empty($_POST["propPos"])) {
        surt();
    }elseif (!isset($_POST["selectCat"]) || empty($_POST["selectCat"])) {
        surt();
    }elseif (!isset($_POST["selectSubcat"]) || empty($_POST["selectSubcat"])) {
        surt();
    }elseif (!isset($_POST["uid"]) || empty($_POST["uid"])) {
        surt();
    }elseif (!isset($_POST["id"]) || empty($_POST["id"])) {
        surt();
    }else{
        //recojemos variables
        $propTitle = $_POST["propTitle"];$propDesc = $_POST["propDesc"];
        $propAccion = $_POST["propAccion"];$propPrice = $_POST["propPrice"];
        $selectCat = $_POST["selectCat"];$selectSubcat = $_POST["selectSubcat"];
        $propPos =$_POST["propPos"];$uid=$_POST["uid"];$id=$_POST["id"];
        
        //consulta sql
        $sql = "UPDATE PROPIERTY
        SET title = '$propTitle', description = '$propDesc', action = '$propAccion', price = '$propPrice', cat = $selectCat, subcat = $selectSubcat, propPos = '$propPos' 
        WHERE ID = $id; ";
        //conexion db
        //inserta propieadd
        $propierty = update($sql);
        
        header("Location: http://localhost/");
        exit();
    }
}
function update($sql)
{
    
    require_once "./create_conn.php";
    $conn = getConn();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    return $conn->lastInsertId(); 
}
function surt()
{
    header("HTTP/1.1 400 Bad Request");
    exit();
}


/*
[uid] => 3 
[id] => 16 
[propTitle] => Otra mas 
[propDesc] =>
[propAccion] => Alquiler 
[propPrice] => 456 
[selectCat] => 1 
[selectSubcat] => 1 
[leaflet-base-layers_58] => on 
[propPos] => {"lat":489.81688107965084,"lng":667.2297297297299} ) 

*/
?>

