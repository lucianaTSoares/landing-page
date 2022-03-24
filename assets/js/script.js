let nome = document.querySelector('#txtNome')
let email = document.querySelector('#txtEmail')
let assunto = document.querySelector('#txaAssunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {

    let div = document.querySelector('#divNome')

    if (nome.value.length < 3) {
        nome.classList.add('is-invalid')
        nome.classList.remove('is-valid')
        div.classList.replace('d-none', 'd-block')
        nomeOk = false
        
    } else {
        nome.classList.add('is-valid')
        nome.classList.remove('is-invalid')
        div.classList.replace('d-block', 'd-none')
        nomeOk = true
    }

    if (nome.value.length == 0) {
        nome.classList.remove('is-invalid', 'is-valid');
        div.classList.replace('d-block', 'd-none')
        nomeOk = false
    }
}

function validaEmail() {

    let div = document.querySelector('#divEmail')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(regex)) {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        div.classList.replace('d-block', 'd-none')
        emailOk = true
        
    } else {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        div.classList.replace('d-none', 'd-block')
        emailOk = false
    }

    if (email.value.length == 0) {
        email.classList.remove('is-invalid', 'is-valid');
        div.classList.replace('d-block', 'd-none')
        emailOk = false
    }
}

function validaAssunto() {

    if (assunto.value != 0) {
        assunto.classList.add('is-valid')
        assuntoOk = true

    } else {
        assunto.classList.remove('is-valid')
        assuntoOk = false
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado, obrigada pelo contato!')

    } else {
        alert('Preencha corretamente o formulário para enviar.')
    }
}