// validação Basic
const inputName = document.getElementById("username");
const inputNickname = document.getElementById("nickname");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputDay = document.getElementById("select-day");
const inputMonth = document.getElementById("select-month");
const inputYear = document.getElementById("select-year");
const selectDay = document.getElementById("select-day");
const selectMonth = document.getElementById("select-month");
const selectYear = document.getElementById("select-year");
var checkbox = document.getElementById("check");
var checkboxValida;
var usernameValida = false;
var emailValida = false;


inputName.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    if (username.value == "") {
        setErrorFor(username, "Full name required.");
    } else {
        setSucessFor(username);
        usernameValida = true;
        localStorage.name = username.value;
    }
});


inputNickname.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    if (inputNickname.value == "") {
        inputNickname.parentElement.classList.remove("sucess")
    } else {
        setSucessFor(inputNickname);
        localStorage.nickname = inputNickname.value;

    }
});

inputEmail.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    if (email.value == "") {
        setErrorFor(email, "Mandatory email.");
    } else {
        setSucessFor(email);
        emailValida = true;
        localStorage.email = email.value;
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        setErrorFor(email, "Enter a valid email.");
    } else {
        setSucessFor(email);
        emailValida = true;
        localStorage.email = email.value;

    }
});

inputPhone.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    if (inputPhone.value == "") {
        inputPhone.parentElement.classList.remove("sucess")
    } else {
        setSucessFor(inputPhone);
        localStorage.phone = inputPhone.value;
    }
});


inputDay.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    localStorage.selDay = selectDay.value;
});


inputMonth.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    localStorage.selMonth = selectMonth.value;
});


inputYear.addEventListener("blur", (eventOne) => {
    eventOne.preventDefault();

    localStorage.selYear = selectYear.value;
});

checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        console.log();
        checkboxValida = 1;
        validaOne();
    } else {
        console.log("não selecionado");
        checkboxValida = 0;
        validaOne();

    }
});

function validaOne() {
    const username = document.getElementById("username");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const buttonOne = document.getElementById("botao-next-um");
    const buttonSocial = document.getElementById("botao-social");
    const buttonCertificates = document.getElementById("botao-certificates");
    const checkValida = document.getElementById("check");
    const inputPhone = document.getElementById("phone");
    var selectDay = document.getElementById("select-day");


    // if(checkValida.value == "") {
    //     setErrorFor(checkValida); 
    // } else {
    //     setSucessFor(checkValida); 
    // }

    // validando a navegação - basic
    var name;
    // validando a navegação
    console.log(usernameValida);
    console.log(emailValida);

    if (usernameValida == true && emailValida == true && checkboxValida == 1) {
        buttonSocial.style.pointerEvents = "visible";
        localStorage.age = age.value;

        buttonOne.classList.add("button__next-ability");
        buttonOne.style.pointerEvents = "visible";
        selectDay.value = localStorage.selDay;

    } else {
        buttonSocial.style.pointerEvents = "none";
        buttonOne.classList.remove("button__next-ability");
        buttonOne.style.pointerEvents = "none";
        buttonCertificates.style.pointerEvents = "none";

    }
}

// validação Social
const buttonTwo = document.getElementById("botao-next-dois");
const inputLink = document.getElementById("linkedin");
const inputGitHub = document.getElementById("github");

inputGitHub.addEventListener("blur", (eventTwo) => {
    eventTwo.preventDefault();

    validacaoTwo();
});

inputLink.addEventListener("blur", (eventTwo) => {
    if (inputGitHub.value !== "") {
        eventTwo.preventDefault();
        validacaoTwo();
    }
});

buttonTwo.addEventListener("click", (eventTwo) => {
    eventTwo.preventDefault();

    validacaoTwo();
});

function validacaoTwo() {
    const github = document.getElementById("github");
    const buttonCertificates = document.getElementById("botao-certificates");
    var githubValida = false;

    if (github.value == "") {
        setErrorFor(github, "Mandatory github.");
    } else {
        setSucessFor(github);
        githubValida = true;
    }

    // localSto..
    if (githubValida == true) {
        buttonCertificates.style.pointerEvents = "visible";
        localStorage.github = github.value;
        localStorage.linkedin = inputLink.value;

        buttonTwo.classList.add("button__next-ability");
        buttonTwo.style.pointerEvents = "visible";

        botaoBasic.style.pointerEvents = "visible";


    } else {
        buttonTwo.style.pointerEvents = "none";
        buttonCertificates.style.pointerEvents = "none";
        buttonTwo.classList.remove("button__next-ability");
    }

}

// validação Certificates
const buttonThree = document.getElementById("botao-finish");
const inputCerficates = document.getElementById("cerficates");
const inputTeamName = document.getElementById("teamName");
const inputInstitution = document.getElementById("institution");
const inputGraduation = document.getElementById("graduation");

inputCerficates.addEventListener("blur", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});

inputTeamName.addEventListener("blur", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});

inputInstitution.addEventListener("blur", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});

inputGraduation.addEventListener("blur", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});


buttonThree.addEventListener("click", (eventThree) => {
    eventThree.preventDefault();

    validacaoThree();
});

function validacaoThree() {
    const buttonBasic = document.getElementById("botao-basic");
    const teamName = document.getElementById("teamName");
    const institution = document.getElementById("institution");
    const graduation = document.getElementById("graduation");
    var teamNameValida = false;
    var institutionValida = false;
    var graduationValida = false;

    if (teamName.value == "") {
        setErrorFor(teamName, "Mandatory Team Name.");
    } else {
        setSucessFor(teamName);
        teamNameValida = true;
    }

    if (institution.value == "") {
        setErrorFor(institution, "Mandatory institution.");
    } else {
        setSucessFor(institution);
        institutionValida = true;
    }

    if (graduation.value == "") {
        setErrorFor(graduation, "Mandatory graduation.");
    } else {
        setSucessFor(graduation);
        graduationValida = true;
    }

    // validando e localStorage
    // validando a navegação
    if (teamNameValida == true && institutionValida == true && graduationValida == true) {
        buttonBasic.style.pointerEvents = "visible";
        localStorage.cerficates = inputCerficates.value;
        localStorage.teamName = teamName.value;
        localStorage.institution = institution.value;
        localStorage.graduation = graduation.value;
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

function inicia() {
    username.value = localStorage.name;
    inputNickname.value = localStorage.nickname;
    email.value = localStorage.email;
    inputPhone.innerHTML = localStorage.phone;
    age.value = localStorage.age;
    validaOne();
}


window.addEventListener("load", function () {
    if ((localStorage.name !== null && localStorage.name !== undefined)) {
        username.value = localStorage.name;
        setSucessFor(username);
        usernameValida = true;
        validaOne();
    }
    if ((localStorage.nickname !== null && localStorage.nickname !== undefined)) {
        inputNickname.value = localStorage.nickname;
        setSucessFor(inputNickname);
        validaOne();
    }
    if ((localStorage.email !== null && localStorage.email !== undefined)) {
        email.value = localStorage.email;
        setSucessFor(email);
        emailValida = true;
        validaOne();
    }
    if ((localStorage.phone !== null && localStorage.phone !== undefined)) {
        inputPhone.value = localStorage.phone;
        console.log(inputPhone.value);
        setSucessFor(inputPhone);
        validaOne();
    }
    if ((localStorage.selDay !== null && localStorage.selDay !== undefined)) {
        selectDay.value = localStorage.selDay;
        console.log(selectDay.value);
        validaOne();
        adiciona(calcula());

    }
    if ((localStorage.selMonth !== null && localStorage.selMonth !== undefined)) {
        selectMonth.value = localStorage.selMonth;
        validaOne();
        adiciona(calcula());

    }
    if ((localStorage.selYear !== null && localStorage.selYear !== undefined)) {
        selectYear.value = localStorage.selYear;
        adiciona(calcula());
        validaOne();
    }


});
