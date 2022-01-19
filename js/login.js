document.addEventListener("DOMContentLoaded", () => {

    /* Función que espera 1 segundo para que aparezcan los formularios */
    let formulario = document.getElementsByTagName("form");
    for (let i = 0; i < formulario.length; i++) {
        setTimeout(function() { formulario[i].style.opacity = "1"; }, 1000);
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
            const testeo = regexp.test(email.value); // devuelve true o false

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



    let flag_reg = false;

    boton_reg.addEventListener("click", (e) => {

        e.preventDefault(true);
        let datos_reg = [inputs_reg[0].value, inputs_reg[1].value, inputs_reg[2].value, inputs_reg[3].value]; // crea array con los datos de registro

        for (let i = 0; i < inputs_reg.length; i++) {

            if (inputs_reg[i].className === "error" || inputs_reg[i].value.length === 0) {

                alert("Rellena todos los campos.")
                return;

            } else {
                flag_reg = true;
            }


        }

        if (flag_reg) {
            /*  COMPROBACIÓN LOCAL STORAGE */
            let usersLS = localStorage.getItem('users');

            if (usersLS === null) { // comprobamos que no existe. en el almacenamiento
                // Este paso solo lo hacemos en el primer registro

                let array_users = [datos_reg]; // creamos un array nuevo con los datos del primer usuario.
                localStorage.setItem('users', JSON.stringify(array_users)); // localStorage.setItem('clave','valor');

            } else {

                usersLS = JSON.parse(usersLS); // convertimos en formato array para poder recorrerlo con un bucle
                // si no lo parseamos, el bucle nos devuelve caracter por caracter.

                for (let i = 0; i < usersLS.length; i++) {

                    if (usersLS[i][0] === datos_reg[0]) { // Comprueba si el usuario ya está registrado.
                        alert("Este usuario ya existe. Inicia Sesión.");
                        return;
                    }
                }
                usersLS.push(datos_reg);
                localStorage.setItem('users', JSON.stringify(usersLS));
                alert("¡Registrado!. Ya puedes iniciar sesión");

            }

        }

    })
    let flag_log = false;
    boton_log.addEventListener("click", (e) => {

        e.preventDefault(true);
        let datos_log = [inputs_log[0].value, inputs_log[1].value]; // crea array con los datos de login
        for (let i = 0; i < inputs_log.length; i++) {
            console.log("entra en for del login");
            if (inputs_log[i].className === "error" || inputs_log[i].value.length === 0) {

                console.log("entra en if de login");
                alert("Rellena todos los campos.")
                return;

            } else {
                flag_log = true;
            }
        }

        if (flag_log) {

            let usersLS = localStorage.getItem('users');
            usersLS = JSON.parse(usersLS); // convertimos en array para poder recorrer el bucle. Corresponde a los usuarios registrados  

            let flag = false;
            let user;
            for (let i = 0; i < usersLS.length; i++) {


                if (usersLS[i][1] === datos_log[0] && usersLS[i][2] === datos_log[1]) {
                    user = usersLS[i][0];

                    flag = true;
                    break;
                }
            }
            if (flag) {

                const datos_auth = [user, true]
                sessionStorage.setItem("auth", JSON.stringify(datos_auth)); //Incluimos la 'clave' user con 'valor' true para que solo entre en la sesión si se ha logeado bien.

                location.href = "../index.html" // Redireccionamos a la página home.

            } else {
                alert("Error, el usuario o la contraseña no concuerdan con los datos registrados");
            }


        }

    })

})

