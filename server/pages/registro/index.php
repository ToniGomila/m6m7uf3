<?php


require "../functions.php";

get_head();

get_header(); 

?>
  <div class="box-form">
    <div class="form-left">
      <div class="overlay">
        <h1>Bienvenido!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur et est sed felis aliquet sollicitudin</p>
        
      </div>
    </div>
    <div class="form-right">
    
      <h5>Registrate</h5>
      <p class="par-topSpace">Ya tienes una cuenta? <a href="http://localhost/pages/login/" class="underlined">Inicia sesión.</a></p>
      <form class="inputs" id="myForm" action="http://localhost/actions/create_account.php" method="POST">
        <input type="text" placeholder="email" name="email" id="inEmail">
        <span class="alert" id="inEmailAl"></span>
        <br>
        <input type="text" placeholder="user name" name="uName" id="inUname">
        <span class="alert" id="inUnameAl"></span>
        <br>
        <input type="password" placeholder="password" name="pswd" id="inPswd">
        <span class="alert" id="inPswdAl"></span>
        <br>
        <input type="password" placeholder="confirm password" name="pswdC" id="inPswdC">
        <span class="alert" id="inPswdAlC"></span>
      </form>
        
      <input type="submit" value="Crear cuenta" class="sumbit" id="send">
    </div>
      
  </div>
  <script src="./script.js"></script>
   
<?php get_footer(); ?>