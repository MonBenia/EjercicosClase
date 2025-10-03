var imagen1Cambiada = false;
function cambiarImagen1() {
    const img = document.getElementById("imagen1");
    if (imagen1Cambiada) {
        img.src = "Imagenes/Ralf.gif"; 
    } else {
        img.src = "Imagenes/Homer1.gif"; 
    }
    imagen1Cambiada = !imagen1Cambiada;
}
var imagen2Cambiada = false;
function cambiarImagen2() {
    const img = document.getElementById("imagen2");
    if (imagen2Cambiada) {
        img.src = "Imagenes/Homer3.gif"; 
    } else {
        img.src = "Imagenes/Homer.gif"; 
    }
    imagen2Cambiada = !imagen2Cambiada;
}

console.log("Hola mundo desde una funcion JavaScript"); 

function cambiarEstiloTexto() {
    var texto = document.getElementById("texto");
    texto.innerText = "Texto cambiado";
    document.getElementById("texto").style.color = "red";
    document.getElementById("texto").style.fontSize = "20px";
    document.getElementById("texto").style.fontFamily = "Impact";
}

var colorCambiado = false;
function cambiarColor() {
    var elemento = document.getElementById("rojo");
    var textoCuadrado = document.getElementById("textoCuadrado");
    textoCuadrado.innerHTML = "Color cambiado";
    if (colorCambiado) {
        elemento.style.backgroundColor = "red"; 
    } else {
        elemento.style.backgroundColor = "blue";
    }
    colorCambiado = !colorCambiado;
}

alert("Hola, bienvenido a la pagina del Señor X");

