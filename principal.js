const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const github = document.getElementById("github");
const cerficates = document.getElementById("cerficates");
const teamName = document.getElementById("teamName");
const institution = document.getElementById("institution");
const graduation = document.getElementById("graduation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs(); // chamando a funçao quando clicar no button
});

/* validação dos input */
function checkInputs() {
  // pegando os valores dos input
  const usernameValue = username.value;
  const emailValue = email.value;
  const githubValue = github.value;
  const teamNameValue = teamName.value;
  const cerficatesValue = cerficates.value;
  const institutionValue = institution.value;
  const graduationValue = graduation.value;

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

  if (githubValue === "") {
    setErrorFor(github, "O GitHub é obrigatório.");
  } else {
    setSucessFor(github);
  }

  if (teamNameValue === "") {
    setErrorFor(teamName, "O Team Name é obrigatório.");
  } else {
    setSucessFor(teamName);
  }

  if (cerficatesValue === "") {
    setErrorFor(cerficates, "O cerficates é obrigatório.");
  } else {
    setSucessFor(cerficates);
  }

  if (institutionValue === "") {
    setErrorFor(institution, "O institution é obrigatório.");
  } else {
    setSucessFor(institution);
  }

  if (graduationValue === "") {
    setErrorFor(graduation, "O graduation é obrigatório.");
  } else {
    setSucessFor(graduation);
  }

  // validado 100%
  const formControls = form.querySelectorAll(".required");

  const formIsValid = [...formControls].every((formControl) => {
    // transformando em um array
    return formControl.className === "form-control sucess"; // se tem a class sucess
  });

  // se tiver a class
  if (formIsValid) {
    alert("O formulário está 100% válido!");
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
