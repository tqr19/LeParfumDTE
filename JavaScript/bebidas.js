document.addEventListener("keyup", e => {   

  if (e.target.matches("#buscador")) {

    if (e.key === "Escape") e.target.value = ""

    document.querySelectorAll(".articulo").forEach(cafe => {

      cafe.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? cafe.classList.remove("filtro")
        : cafe.classList.add("filtro")
    })
  }
})

/*function ej6() {
  var que = prompt("¿De cuantos productos quieres hacer la cuenta?")
  /*var precio = prompt("Indica el precio del producto: ");
  var cantidad = prompt("Indica la cantidad a comprar: ");

  if (que == 1) {
    prompt("Indica el precio del producto: ");
    prompt("Indica la cantidad a comprar: ");
}
else {
    alert(promedio + "\nNo Promocionado")
}

  alert("El cliente quiere probar" + cantidad + " la comida cuesta..." + precio + " cada una. El total de tu proxima compra es: " + parseFloat(precio) * parseInt(cantidad));
}*/
function ej6() {
  var menu = prompt("Ingrese un número de productos entre 1 y 10 para poder calcular.");
  switch (menu) {

    case "1":
      precio = prompt("Indica el precio del producto: ");
      /*cantidad = prompt("Indica la cantidad a comprar: ");*/
      confirm("El producto vale" + precio + "\nEl total de tu menú es..." + precio);
      break;

    case "2":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2)));
      break;

    case "3":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3)));
      break;

    case "4":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4)));
      break;

    case "5":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quintp producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5)));
      break;

    case "6":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quinto producto: ");
      precio6 = prompt("Indica el precio del sexto producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5) + parseInt(precio6)));
      break;

    case "7":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quinto producto: ");
      precio6 = prompt("Indica el precio del sexto producto: ");
      precio7 = prompt("Indica el precio del septimo producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5) + parseInt(precio6) + parseInt(precio7)));
      break;

    case "8":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quinto producto: ");
      precio6 = prompt("Indica el precio del sexto producto: ");
      precio7 = prompt("Indica el precio del septimo producto: ");
      precio8 = prompt("Indica el precio del octavo producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5) + parseInt(precio6) + parseInt(precio7) + parseInt(precio8)));
      break;

    case "9":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quinto producto: ");
      precio6 = prompt("Indica el precio del sexto producto: ");
      precio7 = prompt("Indica el precio del septimo producto: ");
      precio8 = prompt("Indica el precio del octavo producto: ");
      precio9 = prompt("Indica el precio del noveno producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5) + parseInt(precio6) + parseInt(precio7) + parseInt(precio8) + parseInt(precio9)));
      break;

    case "10":
      precio1 = prompt("Indica el precio del primer producto: ");
      precio2 = prompt("Indica el precio del segundo producto: ");
      precio3 = prompt("Indica el precio del tercer producto: ");
      precio4 = prompt("Indica el precio del cuarto producto: ");
      precio5 = prompt("Indica el precio del quinto producto: ");
      precio6 = prompt("Indica el precio del sexto producto: ");
      precio7 = prompt("Indica el precio del septimo producto: ");
      precio8 = prompt("Indica el precio del octavo producto: ");
      precio9 = prompt("Indica el precio del noveno producto: ");
      precio10 = prompt("Indica el precio del decimo producto: ");
      alert("El total de tu menú es..." + (parseInt(precio1) + parseInt(precio2) + parseInt(precio3) + parseInt(precio4) + parseInt(precio5) + parseInt(precio6) + parseInt(precio7) + parseInt(precio8) + parseInt(precio9) + parseInt(precio10)));
      break;

    default:
      alert("Son demasiados productos. Contáctanos para poder reservar.");
  }
  document.getElementById("demo").innerHTML = text;
}