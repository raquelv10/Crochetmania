document.addEventListener("DOMContentLoaded", () => {

    let scroll = document.querySelector(".scroll img");

    window.addEventListener("scroll", () => {

        

        if (document.documentElement.scrollTop === 0) {
            scroll.classList.remove("visible");
        } else {
            scroll.classList.add("visible");
        }

        scroll.addEventListener("click", () => {

            window.scrollTo({   // de esta manera introducimos un objeto.
                behavior: "smooth",     // para que haga un efecto de transición
                top: 0

            })

        })


    })

})