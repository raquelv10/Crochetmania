document.addEventListener("DOMContentLoaded",() =>{

/* Añadir un comentario */

// Declaramos las variables que vamos a necesitar.
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let div = document.querySelector(".contenedor_comentarios")

button.addEventListener("click",()=>{
 
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