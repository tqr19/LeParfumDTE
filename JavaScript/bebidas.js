document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(cafe =>{
  
            cafe.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?cafe.classList.remove("filtro")
              :cafe.classList.add("filtro")
        })
    }
  })

  function ej6() {
    swal({
      
    })
    var precio = prompt("Indica el precio del producto: ");
    var cantidad = prompt("Indica la cantidad a comprar: ");

    alert("El cliente se quiere llevar " + cantidad + " artículos, que cuestan " + precio + " cada uno. El total de su compra es: " + parseFloat(precio) * parseInt(cantidad));
}