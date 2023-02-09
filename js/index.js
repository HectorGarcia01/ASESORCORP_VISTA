/*Para abrir la ventana del login cliente*/
function AbrirCliente(){
    /*Para hacer invisible u ocultar el registro de clientes*/
    InvisibleRegClient();
    /*Para hacer lo contrario del css, osea reemplazar el display:none por el display:blcok*/
    document.getElementById("ventanaLoginC").style.display="block";
}

/*Para abrir la ventana del login abogado*/
function AbrirAbogado(){
    /*Para hacer invisible el registro de abogados*/
    InvisibleRegAboga();
    /*Para hacer lo contrario del css, osea reemplazar el display:none por el display:blcok*/
    document.getElementById("ventanaLoginA").style.display="block";
}

/*Para abrir la ventana de registro cliente*/
function AbrirRegCliente(){
    /*Para cerrar la ventana de login cliente*/
    cerrarVentanaC();
    document.getElementById("contendorRegistro_Cliente").style.display="block";
}

/*Para abrir la ventana de registro abogado*/
function AbrirRegAbogado(){
    /*Para cerrar la ventana de login cliente*/
    cerrarVentanaA();
    document.getElementById("contendorRegistro_Abogado").style.display="block";
}

/*Para el desenfoque y enfoque de la pagina*/
const btn_desenfocC = document.querySelector('#btnLogC');
const btn_enfocC = document.querySelector('#CerrarLoginC');
const btn_desenfocA = document.querySelector('#btnLogA');
const btn_enfocA = document.querySelector('#CerrarLoginA');
const menuLog = document.querySelector('#header_enfocado');
/*Para desenfocar todo despues de abrir el login cliente*/
btn_desenfocC.addEventListener('click', e =>{
    menuLog.classList.toggle("header_desenfocado");
    menuLog.classList.toggle("header_enfocado");
});
/*Para enfocar todo despues de cerrar el login cliente*/
btn_enfocC.addEventListener('click', e =>{
    menuLog.classList.toggle("header_enfocado");
    menuLog.classList.toggle("header_desenfocado");
});
/*Para desenfocar todo despues de abrir el login abogado*/
btn_desenfocA.addEventListener('click', e =>{
    menuLog.classList.toggle("header_desenfocado");
    menuLog.classList.toggle("header_enfocado");
});
/*Para enfocar todo despues de cerrar el login abogado*/
btn_enfocA.addEventListener('click', e =>{
    menuLog.classList.toggle("header_enfocado");
    menuLog.classList.toggle("header_desenfocado");
});

/*Para cerrar y limpiar la ventana del login cliente*/
function cerrarVentanaC(){
    /*Para volver a desaparecer la ventana*/
    document.getElementById("ventanaLoginC").style.display="none";
    LimpiarLoginCliente1();
}

/*Para cerrar y limpiar la ventana del login abogado*/
function cerrarVentanaA(){
    /*Para volver a desaparecer la ventana*/
    document.getElementById("ventanaLoginA").style.display="none";
    LimpiarLoginAbogado1()
}

/*Para limpiar los input de los login*/
function LimpiarLoginCliente1() {
    document.getElementById('LogClient').reset();
    document.getElementById("UsuarioCliente").style.borderColor = "black";
    document.getElementById("ContraCliente").style.borderColor = "black";
}
function LimpiarLoginAbogado1() {
    document.getElementById('LogAbog').reset();
    document.getElementById("UsuarioAbogado").style.borderColor = "black";
    document.getElementById("ContraAbogado").style.borderColor = "black";
}