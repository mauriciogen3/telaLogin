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