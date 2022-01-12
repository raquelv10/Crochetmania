import vanillaValidatorJS from './vanillaValidatorJS.js'

const form = document.querySelector('form')
form.setAttribute('novalidate', true)

form.addEventListener('submit', e => {

  e.preventDefault()

  const formValidated = vanillaValidatorJS(form, {
    rules: {
      nombre: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      mensaje: {
        required: true
      }
    }
  })

  if(formValidated) {
    form.submit();
  }
})