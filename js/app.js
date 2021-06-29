const btnEnviar = document.querySelector('#enviar')
const formulario = document.querySelector('#enviar-mail')

const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

eventListeners()
function eventListeners () {
    document.addEventListener('DOMContentLoaded', iniciarApp)

    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}
function iniciarApp () {
    btnEnviar.disabled = true
    btnEnviar.classList.add('curso-not-allowed', 'opacity-50')
}
function validarFormulario (e) {
    if (e.target.value.length > 0) {
        console.log('si hay algo')
    } else {
        e.target.classList.add('border', 'border-red-500')
        mostrarError()
    }
    var arr = /[A-Z,a-z]+\@[a-z]+[.][a-z]+/g.exec(e.target.value);
    if ( arr ) { 
        e.target.classList.add('border', 'border-green-500')
    } else {
        mostrarError('El email')
    }
}
function mostrarError () {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = 'Todos los campos son obligatorios'
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3')

    const errores = document.querySelectorAll('.error')
    if ( errores.length === 0){
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10'))
    }
}