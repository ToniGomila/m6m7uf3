<?php
session_start();

require "../functions.php";

get_head();

get_header();
if(isset( $_SESSION['email_error'])){
  $email_error = $_SESSION['email_error'];
  unset($_SESSION['email_error']);
}
else if(isset( $_SESSION['pass_error'])){
  $pass_error = $_SESSION['pass_error'];
  unset($_SESSION['pass_error']);
}
if (isset($_SESSION['email'])) {
  $email = $_SESSION['email'];
  unset($_SESSION['email']);
}  
if (isset($_SESSION['error'])) {
  $error = $_SESSION['error'];
  unset($_SESSION['error']);
}
?>
  
  <div class="box-form">
    <div class="form-left">
      <div class="overlay">
        <h1>Hola de nuevo!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur et est sed felis aliquet sollicitudin</p>
        
      </div>
    </div>
    <form class="form-right" method="POST" id="logForm" action="../../actions/logIn.php">
      <!-- FALTA ACTION, METHOD, chequear inputs, ruta a crear cuenta, -->
      <h5>Login</h5>
      <p class="par-topSpace grisPara">No tienes cuenta? <a href="../registro/" class="underlined">Crea tu cuenta</a> no cuesta mas de un minuto.</p>
      <div class="inputs">
        <input type="text" placeholder="email" id="inUname" name="email" value="<?php if(isset($email)){echo $email;}else{echo"";} ?>">
        <span class="alert" id="inUnameAl">
          <?php if(isset($email_error)){echo $email_error;} ?>
        </span>
        <br>
        <input type="password" placeholder="password" id="inPswd" name="pswd">
        <span class="alert" id="inPswdAl">
        <?php if(isset($pass_error)){echo $pass_error;} ?>
        </span>
      </div>
        
        <br><br>
        
      <div class="remember-me--forget-password">
        <label>
          <input type="checkbox" name="item" checked/>
          <span class="text-checkbox">Remember me</span>
        </label>
        <p class="grisPara">forget password?</p>
      </div>
      <br>  
      <input type="submit" value="Login" class="sumbit">
      <?php if(isset($error)){
        echo "<div class='bError'><p class='error'>".$error."</p></div>";
      }?>
    </form>
      
  </div>
  <script src="./script.js"></script>
   
<?php get_footer(); ?>