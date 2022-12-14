<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["email"]) and isset($_POST["pswd"])) {
        reset_cookie_err();
        $email = $_POST["email"];
        $_SESSION['email'] = $email;
        $pass = $_POST["pswd"];
        //check email format
        if(!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email)){
            echo ("Login error, incorrect email format");
            header("Location: ../pages/ses.php");
            setcookie("error", "Login error, incorrect email format");
            exit();
        }

        $salt = $email[0];
        $pepper =  substr($email, strlen($email) - 3, 3);
        $pass = $salt . $pass . $pepper;

        $user = get_user($email, $pass);
        if (is_array($user)) {
            echo ("usuari: " . $user[1] . " <br> id: " . $user[0] . " <br> email: " . $user[2]);
            $_SESSION['user'] = serialize($user);
            header("Location: ../");
            exit();
        } elseif ($user == "incorrect") {
            echo ("Login error, incorrect password");
            header("Location: ../pages/ses.php");
            $_SESSION['pass_error'] = "El usuario y la contraseña no coinciden.";
            exit();
        } elseif($user == ""){
            echo ("Login error, email not found");
            header("Location: ../pages/ses.php");
            $_SESSION['email_error'] ="El correo introducido no esta registrado.";
            exit();
        }

        //header("Location: ../");
        exit();
    } else {
        echo "esta en blanc";
        exit();
    }
} else {
    echo "no POST";
    exit();
}

//si es correcte retorna array(id, user, email) si user no troba conta amb correu retorna "" sino retorna "incorrect"
function get_user($mail, $pwd) 
{
    require_once "./create_conn.php";
    $conn = getConn();
    $sql = "select ID, username, email, pswd from USER where email = '$mail';";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();
    if (password_verify($pwd, $result[3])) {
        return array($result[0], $result[1], $result[2]);
    } elseif (is_array($result)){
        return "incorrect";
    }elseif ($result == "") {
        return "";
    }
}
function reset_cookie_err()
{
    if (isset($_COOKIE['error'])) {
        unset($_COOKIE['error']); 
        setcookie('error', null, -1, '/'); 
        return true;
    } else {
        return false;
    }
}