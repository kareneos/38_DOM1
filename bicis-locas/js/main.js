function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contrasena = document.getElementById("input-password").value;
    var selectBici = document.getElementsByTagName('select')[0].selectedIndex;
    //campos obligatorios
    if((nombre.length == 0)||(apellido.length == 0) || (correo.length == 0) || (contrasena == 0)){
        alert("Por favor llene los primeros 4 campos");
        return false;
    } //sólo letras en nombre y apellido
    else if (!nombre.match(/[a-zA-Z]/) || !apellido.match(/[a-zA-Z]/)){
        alert("Escriba sólo letras en nombre y apellido");
        return false;
    }//primera letra mayúscula
    else if ( /[a-z]/.test( nombre[0]) || /[a-z]/.test( apellido[0])){
        alert("Nombre y apellido deben comenzar con mayúsucula");
        return false;
    }//email válido
    else if (!correo.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        alert("Email inválido");
        return false;
    }
   //contraseña de al menos 6 caracteres
    else if(contrasena.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }//password no igual a "password" ó "123456" ó "098754"
    else if ((contrasena == "password") || (contrasena == "123456") || (contrasena == "098754")){
        alert("Contraseña no válida");
        return false;
    }//opción bicis válida
    else if(0 == selectBici){
        alert("Seleccione un tipo de bici");
        return false;
    }
    return true;
}