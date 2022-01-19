document.addEventListener("DOMContentLoaded", () => {

    /* Añadir un comentario */

    // Declaramos las variables que vamos a necesitar.
    let input = document.querySelector("input");
    let textarea = document.querySelector("textarea");
    let button = document.querySelector(".publicar");
    let div = document.querySelector(".contenedor_comentarios")

    /* Comprueba que el session storage no está vacío */
    let datos_auth = sessionStorage.getItem("auth");
    datos_auth= JSON.parse(datos_auth); 
    
    if (datos_auth !== null) {

        /* Rellena el input nombre de usuario */
        console.log(input.value);
        input.value = `${datos_auth[0]}`;
    } else {
        input.value = "";
    }



    button.addEventListener("click", () => {

        let p = document.createElement("p");
        let text = document.createTextNode(textarea.value);
        let h4 = document.createElement("h4");
        let usuario = document.createTextNode(input.value);
        h4.appendChild(usuario);
        p.appendChild(text);
        p.classList.add(`comentario`);
        div.appendChild(h4);
        div.appendChild(p);

        
    })


})