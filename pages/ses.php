<?php


require "../functions.php";

get_head("ses");

get_header("ses"); 

?>
  <div class="box-form">
    <div class="form-left">
      <div class="overlay">
        <h1>Hola de nuevo!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur et est sed felis aliquet sollicitudin</p>
        
      </div>
    </div>
    <form class="form-right" onsubmit="checkForm()" method="POST" id="logForm" action="../actions/logIn.php">
      <!-- FALTA ACTION, METHOD, chequear inputs, ruta a crear cuenta, -->
      <h5>Login</h5>
      <p class="par-topSpace">No tienes cuenta? <a href="./createAccount.php" class="underlined">Crea tu cuenta</a> no cuesta mas de un minuto.</p>
      <div class="inputs">
        <input type="text" placeholder="email" id="inUname" name="email">
        <span class="alert" id="inUnameAl"></span>
        <br>
        <input type="password" placeholder="password" id="inPswd" name="pswd">
        <span class="alert" id="inPswdAl"></span>
      </div>
        
        <br><br>
        
      <div class="remember-me--forget-password">
        <label>
          <input type="checkbox" name="item" checked/>
          <span class="text-checkbox">Remember me</span>
        </label>
        <p>forget password?</p>
      </div>
      <br>  
      <input type="submit" value="Login" class="sumbit">
    </form>
      
  </div>
  <script src="../scripts/ses.js"></script>
   
<?php get_footer(); ?>