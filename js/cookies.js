document.addEventListener("DOMContentLoaded", () => {
    /* CONTROL DE COOKIES*/

    let boton = document.querySelector("#boton-cookies");
    let cookie1 = document.querySelector("#cookie1");
     
    // Si es menor que 0 quiere decir que nunca se le ha dado a aceptar, así que aparece al iniciar durante 5 segundos.

    if (!localStorage.controlcookie > 0) {
        cookie1.setAttribute("style", "animation: desaparecer 5s;-webkit-animation: desaparecer 5s;");
    }


    boton.addEventListener("click", () => {

        // si variable no existe se crea (al clicar en Aceptar)
        localStorage.controlcookie = (localStorage.controlcookie || 0);
        localStorage.controlcookie++; // incrementamos cuenta de la cookie
        cookie1.style.display = 'none'; // Esconde la política de cookies
    })



})


