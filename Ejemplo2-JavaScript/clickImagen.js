function clickImagen() {
    const img = document.getElementById("Pepe");
    if (img.src.includes("Gamba.jpg")) {
        img.src = "Gamba3.jpg";
    } else {
        img.src = "Gamba.jpg";
    }
}

// Iniciamos el contador fuera de la funcion para que mantenga su valor entre clics
let contador= 0;
function clickImagen2() {
    // Declaramos el array dentro de la funcion para que no se reinicie en cada clic
    let arrayImagenes=  ["Gamba2.jpg", "Gamba4.jpg", "Gamba5.jpg"];    
    var img = document.getElementById("Pepe2");

    contador++;

    if (contador >= arrayImagenes.length) {
        contador = 0;
    }
    //Cambiamos la imagen
    img.src = arrayImagenes[contador];

    console.log(contador);

}