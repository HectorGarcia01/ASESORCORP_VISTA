/*Para la validacion del inicio de sesion de clientes*/
function IngresarCliente(){
    var UserCliente = document.getElementById('UsuarioCliente').value;
    var PasswordCliente = document.getElementById('ContraCliente').value;
    var UsuarioCliente_Unico = "Hector123";
    var PasswordCliente_Unico = 123456789;

    if(UserCliente ==""){
        if(PasswordCliente ==""){
            alert("Por favor ingrese su Usuario y Contraseña!!");
            document.getElementById("UsuarioCliente").style.borderColor = "red";
            document.getElementById("ContraCliente").style.borderColor = "red";               
        }
    }
    else if(UserCliente ==""){
        alert("Por favor ingrese su Usuario!!");
        document.getElementById("UsuarioCliente").style.borderColor = "red";
        document.getElementById("ContraCliente").style.borderColor = "green";
    }
    else if(UsuarioCliente.value == UsuarioCliente_Unico){
        if(PasswordCliente ==""){
            alert("Por favor ingrese su Contraseña!!");
            document.getElementById("UsuarioCliente").style.borderColor = "green";
            document.getElementById("ContraCliente").style.borderColor = "red";
        }
        else if(ContraCliente.value != PasswordCliente_Unico){
            alert("Su Contraseña es incorrecta, vuelva a intentarlo!!");
            document.getElementById("UsuarioCliente").style.borderColor = "green";
            document.getElementById("ContraCliente").style.borderColor = "red";
        }
        else if(ContraCliente.value == PasswordCliente_Unico){
            document.getElementById("UsuarioCliente").style.borderColor = "green";
            document.getElementById("ContraCliente").style.borderColor = "green";
            alert("Iniciando Sesion como: " + UsuarioCliente_Unico);
        }
    }
    else if(UsuarioCliente.value != UsuarioCliente_Unico){
        if(PasswordCliente ==""){
            alert("Por favor ingrese su Contraseña!!");
            document.getElementById("UsuarioCliente").style.borderColor = "green";
            document.getElementById("ContraCliente").style.borderColor = "red";
        }
        else if(ContraCliente.value != PasswordCliente_Unico){
            alert("Su Usuario y Contraseña son incorrectos. No hay ningun Usuario registrado de esa forma, por favor verifica!");
            document.getElementById("UsuarioCliente").style.borderColor = "red";
            document.getElementById("ContraCliente").style.borderColor = "red";
            LimpiarLoginCliente();
        }
    }
    else{
        alert("Ha ocurrido un error, reinicia la pagina...");
    }
}

function IngresarAbogado(){
    var UserAbogado = document.getElementById('UsuarioAbogado').value;
    var PasswordAbogado = document.getElementById('ContraAbogado').value;
    var UsuarioAbogado_Unico = "HarveySpecter";
    var PasswordAbogado_Unico = 123456789;

    if(UserAbogado ==""){
        if(PasswordAbogado ==""){
            alert("Por favor ingrese su Usuario y Contraseña!!");
            document.getElementById("UsuarioAbogado").style.borderColor = "red";
            document.getElementById("ContraAbogado").style.borderColor = "red";               
        }
    }
    else if(UserAbogado ==""){
        alert("Por favor ingrese su Usuario!!");
        document.getElementById("UsuarioAbogado").style.borderColor = "red";
        document.getElementById("ContraAbogado").style.borderColor = "green";
    }
    else if(UsuarioAbogado.value == UsuarioAbogado_Unico){
        if(PasswordAbogado ==""){
            alert("Por favor ingrese su Contraseña!!");
            document.getElementById("UsuarioAbogado").style.borderColor = "green";
            document.getElementById("ContraAbogado").style.borderColor = "red";
        }
        else if(ContraAbogado.value != PasswordAbogado_Unico){
            alert("Su Contraseña es incorrecta, vuelva a intentarlo!!");
            document.getElementById("UsuarioAbogado").style.borderColor = "green";
            document.getElementById("ContraAbogado").style.borderColor = "red";
        }
        else if(ContraAbogado.value == PasswordAbogado_Unico){
            document.getElementById("UsuarioAbogado").style.borderColor = "green";
            document.getElementById("ContraAbogado").style.borderColor = "green";
            alert("Iniciando Sesion como: " + UsuarioAbogado_Unico);
        }
    }
    else if(UsuarioAbogado.value != UsuarioAbogado_Unico){
        if(PasswordAbogado ==""){
            alert("Por favor ingrese su Contraseña!!");
            document.getElementById("UsuarioAbogado").style.borderColor = "green";
            document.getElementById("ContraAbogado").style.borderColor = "red";
        }
        else if(ContraAbogado.value != PasswordAbogado_Unico){
            alert("Su Usuario y Contraseña son incorrectos. No hay ningun Usuario registrado de esa forma, por favor verifica!");
            document.getElementById("UsuarioAbogado").style.borderColor = "red";
            document.getElementById("ContraAbogado").style.borderColor = "red";
            LimpiarLoginAbogado();
        }
    }
    else{
        alert("Ha ocurrido un error, reinicia la pagina...");
    }
}

/*Para limpiar los input de los login*/
function LimpiarLoginCliente() {
    document.getElementById('LogClient').reset();
}
function LimpiarLoginAbogado() {
    document.getElementById('LogAbog').reset();
}