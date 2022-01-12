document.addEventListener("DOMContentLoaded", () => {

    
    let formulario = document.getElementsByTagName("form");
    for(let i=0; i<formulario.length;i++){
        setTimeout(function(){formulario[i].style.opacity= "1"; }, 1000);
    }
    let inputs = document.querySelectorAll("input");
    let labels = document.querySelectorAll("label");

    for (let i = 0; i < inputs.length; i++) {
        // Para que cuando haya datos en los inputs la etiqueta se quede siempre arriba.
        inputs[i].addEventListener("keydown", () => {

            for (let i = 0; i < inputs.length; i++) {

                if (inputs[i].value.length !== 0) {
                    labels[i].classList.add("peque");

                } else {
                    labels[i].classList.remove("peque");
                }

            }
        })

        // Para que cuando cambie el foco del input compruebe si está vacío o si no es correcto el formato insertado (expresiones regulares)

        let p = document.querySelectorAll("p");
        inputs[i].addEventListener("focus", () => {
            p[i].textContent = "";
        })

        inputs[i].addEventListener("blur", () => {

            let name = document.querySelector("#name");
            let aviso_nombre = document.querySelector("#aviso_nombre");
            let aviso_email = document.querySelector("#aviso_email");
            let aviso_password = document.querySelector("#aviso_password");
            let aviso_password2 = document.querySelector("#aviso_password2");

            // Comprueba si se ha rellenado el campo nombre.
            if (name.value.length === 0) {
                name.classList.add("error");
                aviso_nombre.textContent = "Rellena el campo Nombre";
            } else {
                name.classList.remove("error");
            }


            // expresión regular para el correo electrónico:
            let email = document.querySelector("#email");
            const regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/;
            const testeo = regexp.test(email.value);  // devuelve true o false

            if (email.value.length === 0) {

                email.classList.add("error");
                aviso_email.textContent = "Rellena el campo Email";

            } else if (!testeo) {

                email.classList.add("error");
                aviso_email.textContent = "Formato de email incorrecto";

            } else {

                email.classList.remove("error");

            }

            //expresión regular para la contraseña:
            let password = document.querySelector("#password");
            let password2 = document.querySelector("#password2");

            const regexp1 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,20}$/;
            const testeo1 = regexp1.test(password.value);

            //Comprueba si la contraseña tiene el formato correcto
            if (password.value.length === 0) {

                password.classList.add("error");
                aviso_password.textContent = "Rellena el campo Contraseña";

            } else if (!testeo1) {

                password.classList.add("error");
                aviso_password.textContent = "Mín. 6 caracteres , una minúscula, una mayúscula y un número";
            } else {

                password.classList.remove("error");

            }

            // Comprueba si has repetido correctamente la contraseña
            if (password2.value.length === 0) {

                password2.classList.add("error");
                aviso_password2.textContent = "Repite la contraseña";
            } else {
                if (password.value !== password2.value) {

                    password2.classList.add("error");
                    aviso_password2.textContent = "Las contraseñas no coinciden";
                } else {

                    password2.classList.remove("error");
                }
            }

        })

    }

    // para que la imagen del ojo deje ver la contraseña o la oculte:
    const eye = document.querySelectorAll(".eye");

    for (let i = 0; i < eye.length; i++) {

        eye[i].addEventListener("click", () => {
            let img = document.querySelectorAll("img");
            let imagen = "";
            //Para cambiar la imagen de ojo tachado por la normal y viceversa:
            if (img[i].className === "invisible") {
                imagen = document.getElementsByTagName("img")[i].src = "../img/eye-regular.png"
                img[i].className = "visible";
            } else {
                img[i].className = "invisible";
                imagen = document.getElementsByTagName("img")[i].src = "../img/eye-slash-regular.png"
            }

            // Para que cambie el input password por input text para ocultar o enseñar la contraseña.
            let pass = document.getElementsByClassName("pass_eye");

            if (pass[i].type === "password") {

                pass[i].type = "text";
            } else {
                pass[i].type = "password";
            }

        })
    }

    // Función que manda los datos a la función registrar o iniciar según en qué botón hayas clicado:
    const boton_reg = document.querySelector("#registro button");
    const boton_log = document.querySelector("#login button");
    const inputs_reg = document.querySelectorAll("#registro input");
    const inputs_log = document.querySelectorAll("#login input");

    boton_reg.addEventListener("click", (e) => {
    
        e.preventDefault(true);
        for (let i = 0; i < inputs_reg.length; i++) {

            if (inputs_reg[i].className === "error" || inputs_reg[i].value.length === 0) {

                alert("Rellena todos los campos.")
                return;

            } else {
                registrar();
            }
        }


    })

    boton_log.addEventListener("click", (e) => {

        e.preventDefault(true);
    
        for (let i = 0; i < inputs_log.length; i++) {
            console.log("entra en for del login");
            if (inputs_log[i].className === "error" || inputs_log[i].value.length === 0) {
                
                console.log("entra en if de login");
                alert("Rellena todos los campos.")
                return;

            } else {
                iniciar();
            }
        }

    })


    //Comprueba que los datos del formulario son correctos y que no existen en nuestra base de datos, y los envía.
    function registrar() {

        const name_reg = document.getElementById("name"); // input usuario
        const email_reg = document.getElementById("email"); //input email
        const password_reg = document.getElementById("password"); // input password

        let datos = [name_reg.value, email_reg.value, password_reg.value]; // crea array con los datos insertados por el usuario

        //local session y session storage:

    }

    //Comprueba que los datos del formulario son correctos y que existen en nuestra base de datos, y los envía.
    function iniciar() {
        console.log("iniciar");
    }

})