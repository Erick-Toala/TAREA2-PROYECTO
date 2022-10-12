//Ejecutando funciones
document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var frmLogin = document.querySelector(".frmLogin");
var frmRegistro = document.querySelector(".frmRegistro");
var contenedor_LoginRegistro = document.querySelector(".contenedor_LoginRegistro");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_registro = document.querySelector(".caja_trasera-registro");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        frmLogin.style.display = "block";
        contenedor_LoginRegistro.style.left = "0px";
        frmRegistro.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            frmLogin.style.display = "block";
            contenedor_LoginRegistro.style.left = "10px";
            frmRegistro.style.display = "none";
            caja_trasera_registro.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            frmLogin.style.display = "block";
            contenedor_LoginRegistro.style.left = "0px";
            frmRegistro.style.display = "none";
            caja_trasera_registro.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            frmRegistro.style.display = "block";
            contenedor_LoginRegistro.style.left = "410px";
            frmLogin.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            frmRegistro.style.display = "block";
            contenedor_LoginRegistro.style.left = "0px";
            frmLogin.style.display = "none";
            caja_trasera_registro.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}