window.addEventListener('load',()=>{

    let body = document.getElementById("body");
    let h1= document.querySelector("h1");
  
  let modoOscuro= prompt("¿Desea modo oscuro?");
  
  if(modoOscuro){
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
  
    titulo.innerText="LISTADO DE PELÍCULAS";
    titulo.style.color="white";
    titulo.style.backgroundColor="teal";
    titulo.style.padding="20px";
  }
  })