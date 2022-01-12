document.addEventListener("DOMContentLoaded",()=>{
   
    /* ****************FUNCIONES NAV SUPERIOR********************** */

    const cuenta_ul = document.querySelector(".cuenta-ul");  //navbar superior
    const fondo_nav_superior = document.querySelector(".fondo_nav_superior");
    const flecha1 = document.querySelector(".expandir");// icono flecha nav superior

    // Función que muestra la caja de búsqueda al clicar en la lupa:
    flecha1.addEventListener("click", () => {

        cuenta_ul.classList.toggle("responsive");
        if(cuenta_ul.classList.contains("responsive")){
            fondo_nav_superior.style.display = "block";
        }else{
            fondo_nav_superior.style.display = "none";
        }     
     
    })

    // Función que oculta el menu navbar superior al clicar fuera:

    fondo_nav_superior.addEventListener("click",()=>{
        cuenta_ul.classList.remove("responsive");
        fondo_nav_superior.style.display = "none";

    })

/* ****************FUNCIONES NAV PRINCIPAL********************** */
    //navbar principal

    const flecha2 = document.querySelector("#colapsar img");// icono flecha nav principal
    const fondo_nav_principal = document.querySelector(".fondo_nav_principal"); //fondo nav principal
    const navbar_ul = document.querySelector(".navbar-ul"); // ul del navbar principal
    

    flecha2.addEventListener("click", () => {
        
        navbar_ul.classList.toggle("responsive");

        if(navbar_ul.classList.contains("responsive")){
            console.log("tic");
            fondo_nav_principal.style.display = "block";
        }else{
            console.log("tac");
            fondo_nav_principal.style.display = "none";
        }     

    })

    fondo_nav_principal.addEventListener("click",()=>{
        navbar_ul.classList.remove("responsive");
        fondo_nav_principal.style.display = "none";

    })


})