document.addEventListener("DOMContentLoaded",()=>{

    /* Comprueba que el session storage no está vacío */
    let datos_auth = sessionStorage.getItem("auth");

    if (datos_auth !== null) {
       
        /* Cambia "Iniciar sesión" por "cerrar sesión" */
        let cuenta = document.querySelector("#micuenta");
        cuenta.textContent = "Cerrar sesión"
        
         /* Cambia el enlace */
        let href = document.querySelector("#micuenta");
        href.setAttribute("href","../nav/cerrar.html"); 

    }

})
