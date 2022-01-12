document.addEventListener("DOMContentLoaded", () => {

    const contenedor_barra = document.getElementById("contenedor-barra");  //div del input type search  barra-busqueda
    const fondo_busqueda = document.getElementById("fondo-busqueda"); //div vacío - fondo oscuro
    const icon_search = document.getElementById("icon-search");

    // Función que muestra la caja de búsqueda al clicar en la lupa:
    icon_search.addEventListener("click", () => {
        
        contenedor_barra.style.top = "40px";
        
        fondo_busqueda.style.display = "block";
    
    })

    // Función que oculta el fuscador al clicar fuera:


    fondo_busqueda.addEventListener("click",()=>{

        contenedor_barra.style.top = "-120px";
        fondo_busqueda.style.display = "none";

    })


})