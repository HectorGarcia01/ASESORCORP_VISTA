/*Para el desenfoque y enfoque de la pagina*/
const btn_desenfocFG1 = document.querySelector('#IniciarSesC');
const btn_desenfocFG2 = document.querySelector('#IniciarSesA');
const btn_desenfocFG3 = document.querySelector('#RegistrarC');
const btn_desenfocFG4 = document.querySelector('#RegistrarA');
const menuForm = document.querySelector('#header_enfocado');

/*Para desenfocar todo despues de abrir el login cliente*/
btn_desenfocFG1.addEventListener('click', e =>{
    menuForm.classList.toggle("header_desenfocado");
    menuForm.classList.toggle("header_enfocado");
});
/*Para desenfocar todo despues de abrir el login abogado*/
btn_desenfocFG2.addEventListener('click', e =>{
    menuForm.classList.toggle("header_desenfocado");
    menuForm.classList.toggle("header_enfocado");
});
/*Para desenfocar todo despues de abrir el registro cliente*/
btn_desenfocFG3.addEventListener('click', e =>{
    menuForm.classList.toggle("header_desenfocado");
    menuForm.classList.toggle("header_enfocado");
});
/*Para desenfocar todo despues de abrir el registro abogado*/
btn_desenfocFG4.addEventListener('click', e =>{
    menuForm.classList.toggle("header_desenfocado");
    menuForm.classList.toggle("header_enfocado");
});

/*Para hacer visible el registro general*/
function VisibleRegGene(){
    document.getElementById("contenedorRegistro").style.display="block";
}

/*Para validad los input del cliente*/
function CrearCuentaC() {
    /*variables globales para crear cuenta cliente*/
    var NombreC = document.getElementById('Nom_client').value;
    var ApellidoC = document.getElementById('Ape_client').value;
    var FechaC = document.getElementById('Fecha_client').value;
    var SexoC = document.getElementById('Sexo_client').value;
    var Correo1C = document.getElementById('Cuenta_client').value;
    var Correo2C = document.getElementById('correos').value;
    var Contra1C = document.getElementById('Contra_client').value;
    var Contra2C = document.getElementById('Contra_client_rep').value;

    if(NombreC ==""){
        if(ApellidoC ==""){
            if(FechaC ==""){
                if(SexoC ==""){
                    if(Correo1C ==""){
                        if(Contra1C ==""){
                            if(Contra2C ==""){
                                alert("Por favor llene los siguientes campos: Nombre, Apellido, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                                document.getElementById("Nom_client").style.borderColor = "red";
                                document.getElementById("Ape_client").style.borderColor = "red";
                                document.getElementById("Fecha_client").style.borderColor = "red";
                                document.getElementById("Sexo_client").style.borderColor = "red";
                                document.getElementById("Cuenta_client").style.borderColor = "red";
                                document.getElementById("Contra_client").style.borderColor = "red";
                                document.getElementById("Contra_client_rep").style.borderColor = "red";
                            }
                        } 
                    }
                }
            }
        }
        else if(FechaC ==""){
            if(SexoC ==""){
                if(Correo1C ==""){
                    if(Contra1C ==""){
                        if(Contra2C ==""){
                            alert("Por favor llene los siguientes campos: Nombre, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                            document.getElementById("Nom_client").style.borderColor = "red";
                            document.getElementById("Ape_client").style.borderColor = "green";
                            document.getElementById("Fecha_client").style.borderColor = "red";
                            document.getElementById("Sexo_client").style.borderColor = "red";
                            document.getElementById("Cuenta_client").style.borderColor = "red";
                            document.getElementById("Contra_client").style.borderColor = "red";
                            document.getElementById("Contra_client_rep").style.borderColor = "red";
                        }
                    } 
                }
            }
        }
        else if(SexoC ==""){
            if(Correo1C ==""){
                if(Contra1C ==""){
                    if(Contra2C ==""){
                        alert("Por favor llene los siguientes campos: Nombre, Sexo, Nombre de la cuenta y Contraseña!!");
                        document.getElementById("Nom_client").style.borderColor = "red";
                        document.getElementById("Ape_client").style.borderColor = "green";
                        document.getElementById("Fecha_client").style.borderColor = "green";
                        document.getElementById("Sexo_client").style.borderColor = "red";
                        document.getElementById("Cuenta_client").style.borderColor = "red";
                        document.getElementById("Contra_client").style.borderColor = "red";
                        document.getElementById("Contra_client_rep").style.borderColor = "red";
                    }
                } 
            }
        }
        else if(Correo1C ==""){
            if(Contra1C ==""){
                if(Contra2C ==""){
                    alert("Por favor llene los siguientes campos: Nombre, Nombre de la cuenta y Contraseña!!");
                    document.getElementById("Nom_client").style.borderColor = "red";
                    document.getElementById("Ape_client").style.borderColor = "green";
                    document.getElementById("Fecha_client").style.borderColor = "green";
                    document.getElementById("Sexo_client").style.borderColor = "green";
                    document.getElementById("Cuenta_client").style.borderColor = "red";
                    document.getElementById("Contra_client").style.borderColor = "red";
                    document.getElementById("Contra_client_rep").style.borderColor = "red";
                }
            } 
        }
        else if(Contra1C ==""){
            if(Contra2C ==""){
                alert("Por favor llene los siguientes campos: Nombre y Contraseña!!");
                document.getElementById("Nom_client").style.borderColor = "red";
                document.getElementById("Ape_client").style.borderColor = "green";
                document.getElementById("Fecha_client").style.borderColor = "green";
                document.getElementById("Sexo_client").style.borderColor = "green";
                document.getElementById("Cuenta_client").style.borderColor = "green";
                document.getElementById("Contra_client").style.borderColor = "red";
                document.getElementById("Contra_client_rep").style.borderColor = "red";
            }
        }
        else if(Contra2C ==""){
            alert("Por favor llene los siguientes campos: Nombre y repetir la Contraseña!!");
            document.getElementById("Nom_client").style.borderColor = "red";
            document.getElementById("Ape_client").style.borderColor = "green";
            document.getElementById("Fecha_client").style.borderColor = "green";
            document.getElementById("Sexo_client").style.borderColor = "green";
            document.getElementById("Cuenta_client").style.borderColor = "green";
            document.getElementById("Contra_client").style.borderColor = "green";
            document.getElementById("Contra_client_rep").style.borderColor = "red";
        }
    }
    else if(ApellidoC ==""){
        if(FechaC ==""){
            if(SexoC ==""){
                if(Correo1C ==""){
                    if(Contra1C ==""){
                        if(Contra2C ==""){
                            alert("Por favor llene los siguientes campos: Apellido, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                            document.getElementById("Nom_client").style.borderColor = "green";
                            document.getElementById("Ape_client").style.borderColor = "red";
                            document.getElementById("Fecha_client").style.borderColor = "red";
                            document.getElementById("Sexo_client").style.borderColor = "red";
                            document.getElementById("Cuenta_client").style.borderColor = "red";
                            document.getElementById("Contra_client").style.borderColor = "red";
                            document.getElementById("Contra_client_rep").style.borderColor = "red";
                        }
                    } 
                }
            }
        }
    }
    else if(FechaC ==""){
        if(SexoC ==""){
            if(Correo1C ==""){
                if(Contra1C ==""){
                    if(Contra2C ==""){
                        alert("Por favor llene los siguientes campos: Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                        document.getElementById("Nom_client").style.borderColor = "green";
                        document.getElementById("Ape_client").style.borderColor = "green";
                        document.getElementById("Fecha_client").style.borderColor = "red";
                        document.getElementById("Sexo_client").style.borderColor = "red";
                        document.getElementById("Cuenta_client").style.borderColor = "red";
                        document.getElementById("Contra_client").style.borderColor = "red";
                        document.getElementById("Contra_client_rep").style.borderColor = "red";
                    }
                } 
            }
        }
    }
    else if(SexoC ==""){
        if(Correo1C ==""){
            if(Contra1C ==""){
                if(Contra2C ==""){
                    alert("Por favor llene los siguientes campos: Sexo, Nombre de la cuenta y Contraseña!!");
                    document.getElementById("Nom_client").style.borderColor = "green";
                    document.getElementById("Ape_client").style.borderColor = "green";
                    document.getElementById("Fecha_client").style.borderColor = "green";
                    document.getElementById("Sexo_client").style.borderColor = "red";
                    document.getElementById("Cuenta_client").style.borderColor = "red";
                    document.getElementById("Contra_client").style.borderColor = "red";
                    document.getElementById("Contra_client_rep").style.borderColor = "red";
                }
            } 
        }
    }
    else if(Correo1C ==""){
        if(Contra1C ==""){
            if(Contra2C ==""){
                alert("Por favor llene los siguientes campos: Nombre de la cuenta y Contraseña!!");
                document.getElementById("Nom_client").style.borderColor = "green";
                document.getElementById("Ape_client").style.borderColor = "green";
                document.getElementById("Fecha_client").style.borderColor = "green";
                document.getElementById("Sexo_client").style.borderColor = "green";
                document.getElementById("Cuenta_client").style.borderColor = "red";
                document.getElementById("Contra_client").style.borderColor = "red";
                document.getElementById("Contra_client_rep").style.borderColor = "red";
            }
        } 
    }
    else if(Contra1C ==""){
        if(Contra2C ==""){
            alert("Por favor llene los campos de Contraseña!!");
            document.getElementById("Nom_client").style.borderColor = "green";
            document.getElementById("Ape_client").style.borderColor = "green";
            document.getElementById("Fecha_client").style.borderColor = "green";
            document.getElementById("Sexo_client").style.borderColor = "green";
            document.getElementById("Cuenta_client").style.borderColor = "green";
            document.getElementById("Contra_client").style.borderColor = "red";
            document.getElementById("Contra_client_rep").style.borderColor = "red";
        }
    }
    else if(Contra2C ==""){
        alert("Por favor vuelva a ingresar su Contraseña!!");
        document.getElementById("Nom_client").style.borderColor = "green";
        document.getElementById("Ape_client").style.borderColor = "green";
        document.getElementById("Fecha_client").style.borderColor = "green";
        document.getElementById("Sexo_client").style.borderColor = "green";
        document.getElementById("Cuenta_client").style.borderColor = "green";
        document.getElementById("Contra_client").style.borderColor = "green";
        document.getElementById("Contra_client_rep").style.borderColor = "red";
    }
    else if(Contra_client.value != Contra_client_rep.value){
        alert("Por favor verificar las Contraseñas, ya que no coinciden!!");
        document.getElementById("Contra_client").style.borderColor = "red";
        document.getElementById("Contra_client_rep").style.borderColor = "red";
    }
    else{
        document.getElementById("Nom_client").style.borderColor = "green";
        document.getElementById("Ape_client").style.borderColor = "green";
        document.getElementById("Fecha_client").style.borderColor = "green";
        document.getElementById("Sexo_client").style.borderColor = "green";
        document.getElementById("Cuenta_client").style.borderColor = "green";
        document.getElementById("Contra_client").style.borderColor = "green";
        document.getElementById("Contra_client_rep").style.borderColor = "green";
        /*Para hacer invisible el registro de clientes*/
        alert("Su correo ha sido creado exitosamente!!");
        limpiarRegClient();
        InvisibleRegClient();
    }
}

/*Para validad los input del abogado*/
function CrearCuentaA() {
    /*variables globales para crear cuenta cliente*/
    var NombreA = document.getElementById('Nom_Abog').value;
    var ApellidoA = document.getElementById('Ape_Abog').value;
    var FechaA = document.getElementById('Fecha_Abog').value;
    var SexoA = document.getElementById('Sexo_Abog').value;
    var Correo1A = document.getElementById('Cuenta_Abog').value;
    var Correo2A = document.getElementById('correosA').value;
    var Contra1A = document.getElementById('Contra_Abog').value;
    var Contra2A = document.getElementById('Contra_Abog_rep').value;

    if(NombreA ==""){
        if(ApellidoA ==""){
            if(FechaA ==""){
                if(SexoA ==""){
                    if(Correo1A ==""){
                        if(Contra1A ==""){
                            if(Contra2A ==""){
                                alert("Por favor llene los siguientes campos: Nombre, Apellido, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                                document.getElementById("Nom_Abog").style.borderColor = "red";
                                document.getElementById("Ape_Abog").style.borderColor = "red";
                                document.getElementById("Fecha_Abog").style.borderColor = "red";
                                document.getElementById("Sexo_Abog").style.borderColor = "red";
                                document.getElementById("Cuenta_Abog").style.borderColor = "red";
                                document.getElementById("Contra_Abog").style.borderColor = "red";
                                document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                            }
                        } 
                    }
                }
            }
        }
        else if(FechaA ==""){
            if(SexoA ==""){
                if(Correo1A ==""){
                    if(Contra1A ==""){
                        if(Contra2A ==""){
                            alert("Por favor llene los siguientes campos: Nombre, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                            document.getElementById("Nom_Abog").style.borderColor = "red";
                            document.getElementById("Ape_Abog").style.borderColor = "green";
                            document.getElementById("Fecha_Abog").style.borderColor = "red";
                            document.getElementById("Sexo_Abog").style.borderColor = "red";
                            document.getElementById("Cuenta_Abog").style.borderColor = "red";
                            document.getElementById("Contra_Abog").style.borderColor = "red";
                            document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                        }
                    } 
                }
            }
        }
        else if(SexoA ==""){
            if(Correo1A ==""){
                if(Contra1A ==""){
                    if(Contra2A ==""){
                        alert("Por favor llene los siguientes campos: Nombre, Sexo, Nombre de la cuenta y Contraseña!!");
                        document.getElementById("Nom_Abog").style.borderColor = "red";
                        document.getElementById("Ape_Abog").style.borderColor = "green";
                        document.getElementById("Fecha_Abog").style.borderColor = "green";
                        document.getElementById("Sexo_Abog").style.borderColor = "red";
                        document.getElementById("Cuenta_Abog").style.borderColor = "red";
                        document.getElementById("Contra_Abog").style.borderColor = "red";
                        document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                    }
                } 
            }
        }
        else if(Correo1A ==""){
            if(Contra1A==""){
                if(Contra2A ==""){
                    alert("Por favor llene los siguientes campos: Nombre, Nombre de la cuenta y Contraseña!!");
                    document.getElementById("Nom_Abog").style.borderColor = "red";
                    document.getElementById("Ape_Abog").style.borderColor = "green";
                    document.getElementById("Fecha_Abog").style.borderColor = "green";
                    document.getElementById("Sexo_Abog").style.borderColor = "green";
                    document.getElementById("Cuenta_Abog").style.borderColor = "red";
                    document.getElementById("Contra_Abog").style.borderColor = "red";
                    document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                }
            } 
        }
        else if(Contra1A ==""){
            if(Contra2A ==""){
                alert("Por favor llene los siguientes campos: Nombre y Contraseña!!");
                document.getElementById("Nom_Abog").style.borderColor = "red";
                document.getElementById("Ape_Abog").style.borderColor = "green";
                document.getElementById("Fecha_Abog").style.borderColor = "green";
                document.getElementById("Sexo_Abog").style.borderColor = "green";
                document.getElementById("Cuenta_Abog").style.borderColor = "green";
                document.getElementById("Contra_Abog").style.borderColor = "red";
                document.getElementById("Contra_Abog_rep").style.borderColor = "red";
            }
        }
        else if(Contra2A ==""){
            alert("Por favor llene los siguientes campos: Nombre y repetir la Contraseña!!");
            document.getElementById("Nom_Abog").style.borderColor = "red";
            document.getElementById("Ape_Abog").style.borderColor = "green";
            document.getElementById("Fecha_Abog").style.borderColor = "green";
            document.getElementById("Sexo_Abog").style.borderColor = "green";
            document.getElementById("Cuenta_Abog").style.borderColor = "green";
            document.getElementById("Contra_Abog").style.borderColor = "green";
            document.getElementById("Contra_Abog_rep").style.borderColor = "red";
        }
    }
    else if(ApellidoA ==""){
        if(FechaA ==""){
            if(SexoA ==""){
                if(Correo1A ==""){
                    if(Contra1A ==""){
                        if(Contra2A ==""){
                            alert("Por favor llene los siguientes campos: Apellido, Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                            document.getElementById("Nom_Abog").style.borderColor = "green";
                            document.getElementById("Ape_Abog").style.borderColor = "red";
                            document.getElementById("Fecha_Abog").style.borderColor = "red";
                            document.getElementById("Sexo_Abog").style.borderColor = "red";
                            document.getElementById("Cuenta_Abog").style.borderColor = "red";
                            document.getElementById("Contra_Abog").style.borderColor = "red";
                            document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                        }
                    } 
                }
            }
        }
    }
    else if(FechaA ==""){
        if(SexoA ==""){
            if(Correo1A ==""){
                if(Contra1A ==""){
                    if(Contra2A ==""){
                        alert("Por favor llene los siguientes campos: Fecha de nacimiento, Sexo, Nombre de la cuenta y Contraseña!!");
                        document.getElementById("Nom_Abog").style.borderColor = "green";
                        document.getElementById("Ape_Abog").style.borderColor = "green";
                        document.getElementById("Fecha_Abog").style.borderColor = "red";
                        document.getElementById("Sexo_Abog").style.borderColor = "red";
                        document.getElementById("Cuenta_Abog").style.borderColor = "red";
                        document.getElementById("Contra_Abog").style.borderColor = "red";
                        document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                    }
                } 
            }
        }
    }
    else if(SexoA ==""){
        if(Correo1A ==""){
            if(Contra1A ==""){
                if(Contra2A ==""){
                    alert("Por favor llene los siguientes campos: Sexo, Nombre de la cuenta y Contraseña!!");
                    document.getElementById("Nom_Abog").style.borderColor = "green";
                    document.getElementById("Ape_Abog").style.borderColor = "green";
                    document.getElementById("Fecha_Abog").style.borderColor = "green";
                    document.getElementById("Sexo_Abog").style.borderColor = "red";
                    document.getElementById("Cuenta_Abog").style.borderColor = "red";
                    document.getElementById("Contra_Abog").style.borderColor = "red";
                    document.getElementById("Contra_Abog_rep").style.borderColor = "red";
                }
            } 
        }
    }
    else if(Correo1A ==""){
        if(Contra1A ==""){
            if(Contra2A ==""){
                alert("Por favor llene los siguientes campos: Nombre de la cuenta y Contraseña!!");
                document.getElementById("Nom_Abog").style.borderColor = "green";
                document.getElementById("Ape_Abog").style.borderColor = "green";
                document.getElementById("Fecha_Abog").style.borderColor = "green";
                document.getElementById("Sexo_Abog").style.borderColor = "green";
                document.getElementById("Cuenta_Abog").style.borderColor = "red";
                document.getElementById("Contra_Abog").style.borderColor = "red";
                document.getElementById("Contra_Abog_rep").style.borderColor = "red";
            }
        } 
    }
    else if(Contra1A ==""){
        if(Contra2A ==""){
            alert("Por favor llene los campos de Contraseña!!");
            document.getElementById("Nom_Abog").style.borderColor = "green";
            document.getElementById("Ape_Abog").style.borderColor = "green";
            document.getElementById("Fecha_Abog").style.borderColor = "green";
            document.getElementById("Sexo_Abog").style.borderColor = "green";
            document.getElementById("Cuenta_Abog").style.borderColor = "green";
            document.getElementById("Contra_Abog").style.borderColor = "red";
            document.getElementById("Contra_Abog_rep").style.borderColor = "red";
        }
    }
    else if(Contra2A ==""){
        alert("Por favor vuelva a ingresar su Contraseña!!");
        document.getElementById("Nom_Abog").style.borderColor = "green";
        document.getElementById("Ape_Abog").style.borderColor = "green";
        document.getElementById("Fecha_Abog").style.borderColor = "green";
        document.getElementById("Sexo_Abog").style.borderColor = "green";
        document.getElementById("Cuenta_Abog").style.borderColor = "green";
        document.getElementById("Contra_Abog").style.borderColor = "green";
        document.getElementById("Contra_Abog_rep").style.borderColor = "red";
    }
    else if(Contra_Abog.value != Contra_Abog_rep.value){
        alert("Por favor verificar las Contraseñas, ya que no coinciden!!");
        document.getElementById("Contra_Abog").style.borderColor = "red";
        document.getElementById("Contra_Abog_rep").style.borderColor = "red";
    }
    else{
        document.getElementById("Nom_Abog").style.borderColor = "green";
        document.getElementById("Ape_Abog").style.borderColor = "green";
        document.getElementById("Fecha_Abog").style.borderColor = "green";
        document.getElementById("Sexo_Abog").style.borderColor = "green";
        document.getElementById("Cuenta_Abog").style.borderColor = "green";
        document.getElementById("Contra_Abog").style.borderColor = "green";
        document.getElementById("Contra_Abog_rep").style.borderColor = "green";
        /*Para hacer invisible el registro de clientes*/
        alert("Su correo ha sido creado exitosamente!!");
        limpiarRegAbog();
        InvisibleRegAboga();
    }
}

/*Para hacer visible el registro de clientes*/
function VisibleRegClient() {
    document.getElementById("contendorRegistro_Cliente").style.display="block";
    document.getElementById("contenedorRegistro").style.display="none";
}
/*Para hacer invisible el registro de clientes*/
function InvisibleRegClient() {
    document.getElementById("contendorRegistro_Cliente").style.display="none";
}

/*Para hacer visible el registro de abogados*/
function VisibleRegAboga() {
    document.getElementById("contendorRegistro_Abogado").style.display="block";
    document.getElementById("contenedorRegistro").style.display="none";
}
/*Para hacer invisible el registro de abogados*/
function InvisibleRegAboga() {
    document.getElementById("contendorRegistro_Abogado").style.display="none";
}
/*Para limpiar el registro del cliente*/
function limpiarRegClient() {
    document.getElementById('TodoRegistroC').reset();
}
/*Para limpiar el registro del abogado*/
function limpiarRegAbog() {
    document.getElementById('TodoRegistroA').reset();
}