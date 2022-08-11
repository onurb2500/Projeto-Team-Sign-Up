var botaoBasic = document.querySelector("#botao-basic");
var botaoSocial = document.querySelector("#botao-social");
var botaoCertificates = document.querySelector("#botao-certificates");
var slideFirst = document.getElementById("first");

botaoBasic.addEventListener("click", function () {
    slideFirst.style.marginLeft = "0%";
});

botaoSocial.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-33.33%";});

botaoCertificates.addEventListener("click", function () {
    slideFirst.style.marginLeft = "-66.66%";
});