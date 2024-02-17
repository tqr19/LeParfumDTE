/*const search = document.querySelector(".input input"),
      images = document.querySelectorAll(".div1");
search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
        value = searcValue.toLowerCase();
        images.forEach(image =>{
            if(value === image.dataset.name){
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value !="") return;

    images.forEach(image =>{
        image.style.display = "block";
    })
})*/
/*document.addEventListener("keyup", e =>{
    if (e.target.matches("#buscar")){
        document.querySelectorAll('.articulo').forEach(cafe =>{
            console.log(cafe);
        })
    }
    //if(e.target.match)
})*/
/*function bigImg(x) {
    x.style.height = "360px";
    x.style.width = "720px";
  }
  
  function normalImg(x) {
    x.style.height = "360px";
    x.style.width = "720px";
  }*/



function mouseOver(id) {
  document.getElementById(id).style.color = "black";
}

function mouseOut(id) {
  document.getElementById(id).style.color = "white";
}

/*function mouseOver(id) {
    document.getElementByClassName("p1")[].style.color = "black";
  }
  
  function mouseOut(id) {
    document.getElementByClassName("p1")[].style.color = "white";
}*/
  
  