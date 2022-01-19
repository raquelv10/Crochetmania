document.addEventListener("DOMContentLoaded", () => {

    /* Función que cierra la sesión */
    
    const boton_cerrar = document.querySelector("#boton-cerrar");

    let datos_auth = sessionStorage.getItem("auth");
    datos_auth= JSON.parse(datos_auth); 
    
    /* Pone el nombre de usuario en el span */
    let span = document.querySelector("span");
    span.textContent = `${datos_auth[0]}`;

    boton_cerrar.addEventListener("click", () => {

        sessionStorage.clear();
        location.href = "../index.html";

    })

})