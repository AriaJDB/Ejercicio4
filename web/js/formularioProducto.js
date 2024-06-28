var regexNombreP = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*([ ][A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*)*$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;
var regexCategoria = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*([ ][A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*)*$/;
var regexStock = /^\d+$/;

var nombreP=document.getElementById("nombreP");
var mensajeNombreP=document.getElementsByClassName("mensajeNombreP") [0];
var circleCrossNombreP=document.getElementsByClassName("circleCrossNombreP") [0];
var circleCheckNombreP=document.getElementsByClassName("circleCheckNombreP") [0];
var enviarDatos=1;
var band=0;

nombreP.addEventListener("blur", ()=>{    
    if (!regexNombreP.test(nombreP.value)) {
        enviarDatos=0;
        mensajeNombreP.classList.remove("ocultar");
        nombreP.classList.add("error");
        nombreP.classList.remove("correcto");
        circleCrossNombreP.classList.remove("ocultar");
        circleCheckNombreP.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeNombreP.classList.add("ocultar");
        nombreP.classList.remove("error");
        nombreP.classList.add("correcto");
        circleCrossNombreP.classList.add("ocultar");
        circleCheckNombreP.classList.remove("ocultar");
    }
});


var precio=document.getElementById("precio");
var mensajePrecio=document.getElementsByClassName("mensajePrecio") [0];
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio") [0];
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio") [0];
var enviarDatos=1;
var band=0;

precio.addEventListener("blur", ()=>{    
    if (!regexPrecio.test(precio.value)) {
        enviarDatos=0;
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("error");
        precio.classList.remove("correcto");
        circleCrossPrecio.classList.remove("ocultar");
        circleCheckPrecio.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajePrecio.classList.add("ocultar");
        precio.classList.remove("error");
        precio.classList.add("correcto");
        circleCrossPrecio.classList.add("ocultar");
        circleCheckPrecio.classList.remove("ocultar");
    }
});

var categoria=document.getElementById("categoria");
var mensajeCategoria=document.getElementsByClassName("mensajeCategoria") [0];
var circleCrossCategoria=document.getElementsByClassName("circleCrossCategoria") [0];
var circleCheckCategoria=document.getElementsByClassName("circleCheckCategoria") [0];
var enviarDatos=1;
var band=0;

categoria.addEventListener("blur", ()=>{    
    if (!regexCategoria.test(categoria.value)) {
        enviarDatos=0;
        mensajeCategoria.classList.remove("ocultar");
        categoria.classList.add("error");
        categoria.classList.remove("correcto");
        circleCrossCategoria.classList.remove("ocultar");
        circleCheckCategoria.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeCategoria.classList.add("ocultar");
        categoria.classList.remove("error");
        categoria.classList.add("correcto");
        circleCrossCategoria.classList.add("ocultar");
        circleCheckCategoria.classList.remove("ocultar");
    }
});

var stock=document.getElementById("stock");
var mensajeStock=document.getElementsByClassName("mensajeStock") [0];
var circleCrossStock=document.getElementsByClassName("circleCrossStock") [0];
var circleCheckStock=document.getElementsByClassName("circleCheckStock") [0];
var enviarDatos=1;
var band=0;

stock.addEventListener("blur", ()=>{    
    if (!regexStock.test(stock.value)) {
        enviarDatos=0;
        mensajeStock.classList.remove("ocultar");
        stock.classList.add("error");
        stock.classList.remove("correcto");
        circleCrossStock.classList.remove("ocultar");
        circleCheckStock.classList.add("ocultar");
    }else{
        band++;
        enviarDatos = 1;
        mensajeStock.classList.add("ocultar");
        stock.classList.remove("error");
        stock.classList.add("correcto");
        circleCrossStock.classList.add("ocultar");
        circleCheckStock.classList.remove("ocultar");
    }
});

var formulario2=document.getElementById("formulario2");
formulario2.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (enviarDatos === 1 && band === 3 ){
        formulario2.submit();
        requestNotification();
    }else{
        enviarDatos === 0;
        requestNotification1();
        // alert("Hay campos con error o sin validar");
    }
})

function requestNotification() {
    Notification.requestPermission()
        .then(Permission => {
            if(Permission === "granted") {
                new Notification("Se registro correctamente")
            }
        })    
}

function requestNotification1() {
    Notification.requestPermission()
        .then(Permission => {
            if(Permission === "granted") {
                new Notification("Error al registrarse")
            }
        })    
}