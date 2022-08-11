const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs(); // chamando a funçao quando clicar no button
});

/* validação dos input */
function checkInputs() {
  // pegando os valores dos input
  const usernameValue = username.value;
  const emailValue = email.value;

  // verificando um de cada vez
  if (usernameValue === "") {
    setErrorFor(username, "O nome completo é obrigatório.");
  } else {
    setSucessFor(username);
  }

  // duas validações p/ email
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    // verifica se o email é inválido
    setErrorFor(email, "Insira um email válido.");
  } else {
    setSucessFor(email);
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add message de error
  small.innerText = message;

  // add class error
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  // pegando a div acima do input p/ colocar a class sucess
  const formControl = input.parentElement; // retorna a div que é pai desse input -> formControl no HTML

  // add class sucess
  formControl.className = "form-control sucess";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
