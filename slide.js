var botaoBasic = document.querySelector("#botao-basic");
var botaoSocial = document.querySelector("#botao-social");
var botaoCertificates = document.querySelector("#botao-certificates");
var botaoNextUm = document.querySelector("#botao-next-um");
var botaoNextDois = document.querySelector("#botao-next-dois");
var botaoFinish = document.querySelector("#botao-finish");
var slideFirst = document.getElementById("first");

// Paginação através dos botões superiores

botaoBasic.addEventListener("click", function () {
    slideFirst.style.marginLeft = "0%";
});

botaoSocial.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-33.33%";
});

botaoCertificates.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-66.66%";
});

// Paginação pelos botões inferiores

botaoNextUm.addEventListener("click", function() {
    slideFirst.style.marginLeft = "-33.33%";
});

botaoNextDois.addEventListener("click", function(event) {
    event.preventDefault();
    slideFirst.style.marginLeft = "-66.66%";
});


