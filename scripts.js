const button = document.getElementById('button')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const email = document.getElementById('email')
  const senha = document.getElementById('senha')

  if (usuario.value == '') {
    usuario.classList.add("errorInput")
  } else {
    usuario.classList.remove("errorInput")
  }


  if (senha.value == '') {
    senha.classList.add("errorInput")
  } else {
    senha.classList.remove("errorInput")
  }

  if (usuario.value.indexOf("@") == -1 || usuario.value.indexOf(".") == -1 || (usuario.value.indexOf(".") - usuario.value.indexOf("@") == 1)) {
    usuario.classList.add("errorInput")
  } else {
    usuario.classList.remove("errorInput")
  }

  if (!isNaN(usuario.value) == true && usuario.value.length == 11) {
    usuario.classList.remove("errorInput")
  }

  if (senha.value.length <= 5) {
    senha.classList.add("errorInput")
  } else {
    senha.classList.remove("errorInput")
  }

})