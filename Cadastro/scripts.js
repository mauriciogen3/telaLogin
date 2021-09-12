
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false

  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true


  }
})


usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
      labelUsuario.setAttribute('style','color: red')
      labelUsuario.innerHTML = 'Email ou telefone *Insira no minimo 5 caracteres'  
      usuario.setAttribute('style','border-color: red')
      validUsuario = false
  } else{
      labelUsuario.setAttribute('style','color: green')
      labelUsuario.innerHTML = 'Email ou telefone'
      usuario.setAttribute('style','border-color: green')
      validUsuario = true

  }
})
