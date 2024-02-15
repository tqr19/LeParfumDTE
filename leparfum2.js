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