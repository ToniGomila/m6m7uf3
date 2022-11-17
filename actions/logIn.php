<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["email"]) and isset($_POST["pswd"])){
        $email = $_POST["email"];
        $pass = $_POST["pswd"];
        echo $email." ".$pass;

        $salt = $email[0];
        $pepper =  substr($email,strlen($email)-3,3);
        $pass = $salt.$pass.$pepper;
        $pswd = password_hash($pwd, PASSWORD_DEFAULT);
        //checks
        
        $user = get_user($email, $pswd);
        if ($user == "") {
            echo("<br>No user found");
            exit();
        }
        echo($user[0] . " " . $user[1] . $user[2]);
        
        
        
        //header("Location: ../");
        exit();
    }else{
        echo "esta en blanc";
        exit();
    }
}else{
    echo "no POST";
    exit();
}

function get_user($mail, $pwd)
{
    require_once "./createConn.php";
    $conn = getConn();
    $sql = "select ID, username, email, pswd from USER where email = '$mail';";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();
    if ($result == "") {return "";}
    else if(password_verify($pwd, $result[3])){return array($result[0] ,$result[1], $result[2]);}
    return "incorrect";
    

}
