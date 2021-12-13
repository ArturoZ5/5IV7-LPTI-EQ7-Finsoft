const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');




const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.username.test(e.target.value)) {

            }
            else {
                document.getElementById('username').classList.add('formulario__grupo-incorrecto');
            }


            break;
        case "nombre":

            break;
        case "correo":

            break;
        case "password":

            break;
        case "password2":

            break;

    }
}

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});





form.addEventListener('submit', (e) => {
    e.preventDefault();
});

