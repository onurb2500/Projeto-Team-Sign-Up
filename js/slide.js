var botaoBasic = document.getElementById("botao-basic");
var botaoSocial = document.getElementById("botao-social");
var botaoCertificates = document.getElementById("botao-certificates");
var botaoNextUm = document.getElementById("botao-next-um");
var botaoNextDois = document.getElementById("botao-next-dois");
var botaoFinish = document.getElementById("botao-finish");
var slideFirst = document.getElementById("first"); 

// Paginação através dos botões superiores

botaoBasic.addEventListener("click", function () {
    slideFirst.style.marginLeft = "0%";
    botaoBasic.classList.add("botao-hability"); 
    botaoBasic.classList.remove("botao-desability"); 
    botaoSocial.classList.remove("botao-hability");
    botaoSocial.classList.add("botao-desability"); 
    botaoCertificates.classList.remove("botao-hability");
    botaoCertificates.classList.add("botao-desability"); 
});

botaoSocial.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-33.33%";
    botaoBasic.classList.add("botao-desability");
    botaoSocial.classList.add("botao-hability"); 
    botaoSocial.classList.remove("botao-desability");
    botaoCertificates.classList.remove("botao-hability");
    botaoCertificates.classList.add("botao-desability"); 
});

botaoCertificates.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-66.66%";
    botaoSocial.classList.add("botao-desability");
    botaoCertificates.classList.add("botao-hability"); 
    botaoCertificates.classList.remove("botao-desability");
    botaoBasic.classList.remove("botao-hability");
    botaoBasic.classList.add("botao-desability"); 
});

// Paginação pelos botões inferiores

botaoNextUm.addEventListener("click", function(event) {
    event.preventDefault();
    slideFirst.style.marginLeft = "-33.33%";
    botaoSocial.classList.remove("botao-desability");
    botaoSocial.classList.add("botao-hability");

    botaoCertificates.classList.add("botao-desability"); 
    botaoCertificates.classList.remove("botao-hability"); 

    botaoBasic.classList.remove("botao-hability");
    botaoBasic.classList.add("botao-desability"); 
    botaoBasic.style.pointerEvents = "visible"; 
});

botaoNextDois.addEventListener("click", function(event) {
    event.preventDefault();
    slideFirst.style.marginLeft = "-66.66%";
    botaoSocial.classList.remove("botao-hability");
    botaoSocial.classList.add("botao-desability");

    botaoCertificates.classList.add("botao-hability"); 
    botaoCertificates.classList.remove("botao-desability"); 

    botaoBasic.classList.remove("botao-hability"); 
    botaoBasic.classList.add("botao-desability"); 
});


