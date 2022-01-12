document.addEventListener("DOMContentLoaded",()=>{
   
    /* ****************FUNCIONES NAV SUPERIOR********************** */

    const cuenta_ul = document.querySelector(".cuenta ul");  //navbar superior
    const fondo_nav_superior = document.querySelector(".fondo_nav_superior");
    const flecha1 = document.querySelector(".expandir");// icono flecha nav superior

    // Función que muestra la caja de búsqueda al clicar en la lupa:
    flecha1.addEventListener("click", () => {

        if(cuenta_ul.classList.contains("cuenta_vertical")){
            
            cuenta_ul.classList.remove("cuenta_vertical");
            fondo_nav_superior.style.display = "none";
  
        }else {
            
            cuenta_ul.classList.add("cuenta_vertical");
            fondo_nav_superior.style.display = "block";
        }
     
    })


    // Función que oculta el menu navbar superior al clicar fuera:
/
    fondo_nav_superior.addEventListener("click",()=>{
        cuenta_ul.classList.remove("cuenta_vertical");
        fondo_nav_superior.style.display = "none";

    })

/* ****************FUNCIONES NAV PRINCIPAL********************** */
    //navbar principal

    const flecha2 = document.querySelector("#colapsar img");// icono flecha nav principal
    const fondo_nav_principal = document.querySelector(".fondo_nav_principal"); //fondo nav principal
    const navbar_ul = document.querySelector(".navbar-ul"); // ul del navbar principal
    

    flecha2.addEventListener("click", () => {
        
        console.log("entra");
        if(navbar_ul.className === "navbar-ul"){
            
            fondo_nav_principal.style.display = "none";
            navbar_ul.className += " responsive";
            
        }else { 
            
            fondo_nav_principal.style.display = "block";
            navbar_ul.className = "navbar-ul";
        } 
     
    })
/* 

    content_cuenta1.addEventListener("click",()=>{
        ul_navbar.classList.remove("cuenta_vertical");
        ul_navbar.style.top = "-350px";
        content_cuenta1.style.display = "none";

    }) */ 

})