// validação Basic
const inputName = document.getElementById("username");
const inputNickname = document.getElementById("nickname");
const inputEmail = document.getElementById("email"); 
const inputPhone = document.getElementById("phone");
const inputDay = document.getElementById("select-day");
const inputMonth = document.getElementById("select-month");
const inputYear = document.getElementById("select-year");

inputName.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputNickname.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputEmail.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputPhone.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputDay.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputMonth.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

inputYear.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    validaOne(); 
});

function validaOne() { 
    const username = document.getElementById("username"); 
    const email = document.getElementById("email"); 
    const buttonOne = document.getElementById("botao-next-um"); 
    const buttonSocial = document.getElementById("botao-social");
    const checkValida = document.getElementById("check")
    var usernameValida = false; 
    var emailValida = false; 

    if(username.value == "") {
        setErrorFor(username, "Full name required."); 
    } else {
        setSucessFor(username); 
        usernameValida = true;
    }

    if(email.value == "") {
        setErrorFor(email, "Mandatory email.");
    } else {
        setSucessFor(email);  
        emailValida = true;
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) { 
        setErrorFor(email, "Enter a valid email."); 
    } else {
        setSucessFor(email); 
        emailValida = true;  
    } 

    if(checkValida.value == "") {
        setErrorFor(checkValida); 
    } else {
        setSucessFor(checkValida); 
    }

    // validando a navegação
    if(usernameValida == true && emailValida == true) {
        buttonSocial.style.pointerEvents = "visible"; 
    } else {
        buttonSocial.style.pointerEvents = "none"; 
    }
} 

// validação Social
const buttonTwo = document.getElementById("botao-next-dois");

buttonTwo.addEventListener("click", (eventTwo) => {
    eventTwo.preventDefault();

    validacaoTwo();  
}); 

function validacaoTwo() { 
    const github = document.getElementById("github"); 

    if(github.value == "") {
        setErrorFor(github, "O GitHub é obrigatório."); 
    } else {
        setSucessFor(github); 
    }
} 

// validação Certificates
const buttonThree = document.getElementById("botao-finish");

buttonThree.addEventListener("click", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});

function validacaoThree() { 
    const cerficates = document.getElementById("cerficates");
    const teamName = document.getElementById("teamName"); 
    const institution = document.getElementById("institution");
    const graduation = document.getElementById("graduation");

    if(cerficates.value == "") {
        setErrorFor(cerficates, "O certificado é obrigatório."); 
    } else {
        setSucessFor(cerficates); 
    }

    if(teamName.value == "") {
        setErrorFor(teamName, "O certificado é obrigatório."); 
    } else {
        setSucessFor(teamName); 
    }

    if(institution.value == "") {
        setErrorFor(institution, "A institution é obrigatório."); 
    } else {
        setSucessFor(institution); 
    }

    if(graduation.value == "") {
        setErrorFor(graduation, "O graduation é obrigatório."); 
    } else {
        setSucessFor(graduation); 
    }  
} 

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error"; 
} 

function setSucessFor(input) {
    const formControl = input.parentElement; 

    formControl.className = "form-control sucess";  
} 
