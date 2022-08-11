// Pegando os valores dos inputs
// var inputTriggerOne = document.querySelector("#input-trigger");
var inputName = document.querySelector("#username");
var inputEmail = document.querySelector("#email");
var inputPhone = document.querySelector("#phone");
var inputAge = document.querySelector("#age");

// Variáveis booleanas de verificação
var inputNameVal = false;
var inputEmailVal = false;
var inputPhoneVal = false;
var inputAgeVal = false;

/* validação dos input */

inputName.addEventListener("blur", verifica);
inputEmail.addEventListener("blur", verifica);
inputPhone.addEventListener("blur", verifica);
inputEmail.addEventListener("blur", verifica);




    function verifica () {

        // pegando os valores dos input
        const usernameValue = inputName.value;
        const emailValue = inputEmail.value;
        console.log(emailValue);

        // verificando um de cada vez
        if (usernameValue == "") {
            setErrorFor(username, "O nome completo é obrigatório.");
        } else {
            console.log("entrando");
            setSucessFor(username);
            inputNameVal = true;
        }

        // // duas validações p/ email
        if (emailValue === "") {
            setErrorFor(email, "O email é obrigatório.");
        } else if (!checkEmail(emailValue)) {
            // verifica se o email é inválido
            setErrorFor(email, "Insira um email válido.");
        } else {
            setSucessFor(email);
            inputNameVal = true;
        }

        // // validação para celular

        function setErrorFor() {
            botaoNextUm.display = "none";
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

        if (inputNameVal && inputEmailVal/*&& inputAgeVal && inputPhoneVal && checked*/) {
            // botaoNextUm.style. = "";
            // botaoSocial.style.pointerEvents = "visible";
            botaoNextUm.style.display = "none";
        };
    }
