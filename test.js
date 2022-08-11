// validação Basic
const buttonOne = document.getElementById("botao-next-um");

buttonOne.addEventListener("click", (eventOne) => {
    eventOne.preventDefault();

    validaOne();
});

function validaOne() { 
    const username = document.getElementById("username"); 
    const email = document.getElementById("email"); 

    if(username.value == "") {
        setErrorFor(username, "O nome completo é obrigatório."); 
    } else {
        setSucessFor(username); 
    }

    if(email.value == "") {
        setErrorFor(email, "O email é obrigatório.");
    } else {
        setSucessFor(email);  
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) { 
        setErrorFor(email, "Insira um email válido."); 
    } else {
        setSucessFor(email);  
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
