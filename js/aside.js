document.addEventListener("DOMContentLoaded", () => {

    // Creamos el div content-aside: 

    //Declaramos las variables que vamos a necesitar.
    const contenedor_aside = document.querySelector(".contenedor-aside");
    const div_content_aside = document.createElement("div");
    const h2 = document.createElement("h2");
    const titulo = document.createTextNode("Entradas recientes");
 
    div_content_aside.setAttribute("class", "content-aside");
    
    h2.appendChild(titulo);
    div_content_aside.appendChild(h2);

    for(let i=0; i<6; i++){
        const href = document.createElement("a");
        href.setAttribute("id", `enlace${i}`);
        div_content_aside.appendChild(href);
    }

    contenedor_aside.appendChild(div_content_aside);
    let href = document.querySelectorAll(".content-aside a");

    href[0].setAttribute("href","nav/entradas/gorrito_oso.html");
    href[0].textContent = "Gorrito con orejas de oso";
    href[1].setAttribute("href","nav/entradas/crochet_en_la_calle.html");
    href[1].textContent = "Crochet en las calles";
    href[2].setAttribute("href","nav/entradas/patucos_crochet.html");
    href[2].textContent = "Patucos a crochet"
    href[3].setAttribute("href","nav/entradas/ojos_amigurumi.html");
    href[3].textContent = "Ojos para amigurumis";
    href[4].setAttribute("href","nav/entradas/que_aguja.html");
    href[4].textContent = "Qué aguja escoger";
    href[5].setAttribute("href","nav/entradas/sonajero_redondo.html");
    href[5].textContent = "Sonajero con asa redonda";

     
    // Función que abre y cierra el aside con el icomo de menú burger
    let burguer = document.querySelector("#burguer img");
    let contenedor = document.querySelector(".contenedor-aside");
    let content = document.querySelector(".content-aside");
    
    contenedor.addEventListener("click", ()=>{
        
        content.style.left = "-20%";
        contenedor.style.display = "none";
        content.classList.remove("izquierda");
        contenedor.classList.remove("visible");
    })
 
    burguer.addEventListener("click", () => {
          
        content.classList.toggle("izquierda");
        contenedor.classList.toggle("visible");
                 
    }) 
})