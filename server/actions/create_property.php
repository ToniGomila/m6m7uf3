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
    }else{
        //recojemos variables
        $propTitle = $_POST["propTitle"];$propDesc = $_POST["propDesc"];
        $propAccion = $_POST["propAccion"];$propPrice = $_POST["propPrice"];
        $selectCat = $_POST["selectCat"];$selectSubcat = $_POST["selectSubcat"];
        $propPos =$_POST["propPos"];$uid=$_POST["uid"];
        //guardamos imagenes
        $images = array();
        $dir_subida = '../assets/uploads/';
        for ($i=0; $i<count($_FILES["propFiles"]["name"]); $i++) {
            $name = time().rand(1,9999999).basename($_FILES["propFiles"]["name"][$i]);
            $fichero_subido = $dir_subida .$name;
            //echo "<br> $fichero_subido - ".$_FILES["propFiles"]["tmp_name"][$i];
            if (move_uploaded_file($_FILES["propFiles"]["tmp_name"][$i], $fichero_subido)) {
                array_push($images, $name);
            }
            else {
                echo "¡Error!";
            }
        }
        $singlename = time().rand(1,9999999).basename($_FILES["propHeader"]["name"]);
        $singleImage = $dir_subida .$singlename;
        echo($singleImage);
        if (move_uploaded_file($_FILES["propHeader"]["tmp_name"], $singleImage)) {
            $headImg = $singleImage;
        }
        else {
            echo "¡Error head!";
        }
        //consulta sql
        $sql = "insert into PROPIERTY(title, description, action, price, cat, subcat, propPos, headImg, uid) values (
            '$propTitle', '$propDesc', '$propAccion', '$propPrice', '$selectCat', '$selectSubcat', '$propPos', '$singlename', '$uid'
        );";

        //conexion db
        //inserta propieadd
        $propierty = insert($sql);
        //inserta url imagenes
        foreach ($images as $url) {
            $sql = "insert into IMAGES(path, propiertyID) values ('$url', $propierty);";
            insert($sql);
        }
        
        header("Location: ../");
        exit();
    }
}else{
    
}
function insert($sql)
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

?>

