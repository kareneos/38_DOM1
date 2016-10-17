function validateForm(){
	/* Escribe tú código aquí */
    //campos obligatorios
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contrasena = document.getElementById("input-password").value;
    
    if((nombre.length == 0)||(apellido.length == 0) || (correo.length == 0) || (contrasena == 0)){
        alert("Por favor llene los primeros 4 campos");
        return false;
    } //sólo letras en nombre y apellido
    else if (nombre.match(/[0-9]/) || apellido.match(/[0-9]/)){
        alert("Escriba sólo letras en nombre y apellido");
        return false;
    }//primera letra mayúscula
    else if ( /[a-z]/.test( nombre[0]) || /[a-z]/.test( apellido[0])){
        alert("Nombre y apellido deben comenzar con mayúsucula");
        return false;
    }//contraseña de al menos 6 caracteres
    else if(contrasena.length < 6 ){
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }//password no igual a "password" ó "123456" ó "098754"
    else if ((contrasena == "password") || (contrasena == "123456") || (contrasena == "098754")){
        alert("Contraseña no válida");
        return false;
    }//opción bicis válida
    else if{
        alert("El valor seleccionado de bicis, debe ser una de las opciones presentadas")
        return false;
    }
    return true;
}
