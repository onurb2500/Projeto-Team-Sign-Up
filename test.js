const button = document.getElementById("botao-next-dois");

button.addEventListener("click", (event) => {
    event.preventDefault();

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
