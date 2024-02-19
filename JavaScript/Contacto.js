window.addEventListener("scroll", function(){ //espera el evento de desplazamiento y cuando se produzca se ejecutara la funcion que esta  dentro de llaves
    var header = document.querySelector("header"); // Buscará y devolverá el primer elemento proporcionado, en este caso "header"
    header.classList.toggle("abajo",window.scrollY>0); // "classList.toggle" agrega o elimina una clase, es decir cuando el desplazamiento (scrollY) sea mayor que 0 agregara la clase abajo, de lo contrario la eliminará//
})