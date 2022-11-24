
function validaCampos(){

    var formulario;
    //valida el campo de usuario
    formulario=document.formUser;

    if (formulario.user.value=="") {
        //valida si el campo esta vacio
        document.getElementById("validaUser").innerHTML="Favor escribir el nombre de usuario";

        formulario.user.focus();
        return false;
        
    } else {
        document.getElementById("validaUser").innerHTML="";
    }

    if (formulario.email.value=="") {

        document.getElementById("validaEmail").innerHTML="Favor escribir su correo"
        formulario.email.focus();
        return false;

    } else {
        document.getElementById("validaEmail").innerHTML="";
    }

    if (formulario.password.value=="") {

        document.getElementById("validaPassword").innerHTML="Favor escribir una contraseña"
        formulario.password.focus();
        return false;
    } else {
        document.getElementById("validaPassword").innerHTML="";
    }

    if (formulario.passwordC.value=="") {
        document.getElementById("validapasswordC").innerHTML="Favor escribir su correo"
        formulario.passwordC.focus();
        return false;

        
    } else {
        document.getElementById("validapasswordC").innerHTML="";
    }

    formulario.submit();

}