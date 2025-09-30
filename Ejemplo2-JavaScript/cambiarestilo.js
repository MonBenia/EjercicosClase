 function Cambiodeformato(){
            document.getElementById("miTexto").style.fontFamily = "Comic Sans MS"; // Cambiamos el tipo de letra del h1
            document.getElementById("miTexto").style.color = "red"; // Cambiamos el color del texto del h1
            document.getElementById("miParrafo").style.fontFamily = "sans-serif"; // Cambiamos el tipo de letra del parrafo
            document.getElementById("miParrafo").style.color = "green"; // Cambiamos el color del texto del parrafo
        }

 function cambiarTexto(){
            document.getElementById("miTexto").innerText = "Puxa Sporting"; // Cambiamos el contenido del texto del html
            document.getElementById("miParrafo").innerText = "Hola"; // Cambiamos el contenido del texto del parrafo
            document.getElementById("miTexto").innerHTML= "<h2> Puxa Sporting </h2>"; // Cambiamos tipo de titulo de h1 a h2
            document.getElementById("miParrafo").innerHTML= "<h1> Hola </h1>"; // Cambiamos el parrafo a un h1
            
        }