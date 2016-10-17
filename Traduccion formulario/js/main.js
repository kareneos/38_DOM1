var signIn = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var rememberMe = document.getElementsByTagName("span")[0];
var buttonSignIn = document.getElementsByClassName("btn")[0];

signIn.innerHTML = "Por favor inicia sesión";
email.setAttribute("placeholder","Correo Electrónico");
password.setAttribute("placeholder","Contraseña");
rememberMe.innerHTML = "Recordar datos";
buttonSignIn.innerHTML = "Inicia Sesión";