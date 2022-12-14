<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["email"]) and isset($_POST["uName"]) and isset($_POST["pswd"])){
            $email = trim($_POST["email"]);
            $user = trim($_POST["uName"]);
            $password = trim($_POST["pswd"]);
            echo $email." ".$user." ".$password;
            //checks
            if(!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email)){
                //no es email
                header("Location: ../pages/createAccount.php");
                setcookie("error", "Error, incorrect email format");
                exit();
            }else if (!check_pass($password)) {
                //pass no correcte
                header("Location: ../pages/createAccount.php");
                setcookie("error", "Error, incorrect password format");
                exit();
            }
            insertUser($email, $user, $password);
            header("Location: ../");
            exit();
        }else{
            header("HTTP/1.1 400 Bad Request");
            exit();
        }
    }else{
        header("HTTP/1.1 400 Bad Request");
        exit();
    }
function insertUser($mail, $usr, $pwd)
{
    $salt = $mail[0];
    $pepper =  substr($mail,strlen($mail)-3,3);
    $pwd = $salt.$pwd.$pepper;
    $pswd = password_hash($pwd, PASSWORD_DEFAULT);
    
    require_once "./create_conn.php";
    $conn = getConn();

    $sql = "INSERT INTO USER(username, email, salt, pswd, pepper)  
    VALUES ('$usr', '$mail', '$salt' ,'$pswd', '$pepper')";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
}
function check_pass($recivedPass)
{
    $lowerCaseLetters = "/[a-z]/";
    $upperCaseLetters = "/[A-Z]/";
    $numbers = "/[0-9]/";
    $specialChars =  "/[`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/";
    if (!preg_match($lowerCaseLetters, $recivedPass)) {
        //no lower case
        return false;
    }else if (!preg_match($upperCaseLetters, $recivedPass)) {
        //no upper case
        return false;
    }else if (!preg_match($numbers, $recivedPass)) {
        //no numbers
        return false;
    }else if (!preg_match($specialChars, $recivedPass)) {
        //no specialChars
        return false;
    }
    return true;
}
?>


