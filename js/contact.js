import vanillaValidatorJS from './vanillaValidatorJS.js';

const form = document.querySelector('form');
form.setAttribute('novalidate', true);

form.addEventListener('submit', e => {

  e.preventDefault();

  const contactFormValidated = vanillaValidatorJS(form, {
    rules: {
      nombre: {
        required: true,
        minlength: 2,
        maxlength: 20
      },
      email: {
        required: true,
        email: true
      },
      mensaje: {
        required: true,
        minlength: 4,
        maxlength: 100
      }
    }
  })

  console.log(contactFormValidated)
})