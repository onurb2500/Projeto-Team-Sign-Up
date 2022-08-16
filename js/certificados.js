var botaoMore = document.getElementById("botaoMore");
var arrayUl = [];
var arrayValue = [];
var listaCertificados = document.querySelectorAll(".input-favorito");


botaoMore.addEventListener("click", function (event) {
    event.preventDefault();

    var li = document.createElement("li");

    var ul = document.getElementById("ul");
    ul.appendChild(li);

    var containerInput = document.createElement("div");
    containerInput.classList.add("button__favorito");
    li.appendChild(containerInput);
    var inputCertificates = document.getElementById("cerficates");
    var inputCertificatesValue = inputCertificates.value;
    

    var itemCertificados = document.createElement("input");
    containerInput.appendChild(itemCertificados);
    itemCertificados.classList.add("input-favorito");


    var buttonFav = document.createElement("button");
    containerInput.appendChild(buttonFav);
    buttonFav.classList.add("button-favorito");

    itemCertificados.value = inputCertificatesValue;

    arrayUl.push(li);
    arrayValue.push(inputCertificatesValue);
    localStorage.certificate = JSON.stringify(arrayValue);
    console.log(arrayValue);

    if (arrayUl.length >= 5) {
        botaoMore.style.pointerEvents = "none";
    } else {
        botaoMore.style.pointerEvents = "visible";
    }

    inputCertificates.value = "";

    buttonFav.addEventListener("click", function (event) {
        event.preventDefault();
        var alvo = event.target;
        alvo.classList.add("button-favorito-selected");

    });

    buttonFav.addEventListener("click", function (event) {
        event.preventDefault();
        var alvo = event.target;
        var paiDoAlvo = alvo.parentNode;
        var avoDoAlvo = paiDoAlvo.parentNode;

        avoDoAlvo.remove();

        ul.insertBefore(avoDoAlvo, ul.children[0]);

        //(arrayUl);
    });

    // var botaoFavoritoInicial = document.getElementById("button-favorito-inicial");
    // botaoFavoritoInicial.addEventListener("click", function(event) {
    //     event.preventDefault();
    //     var alvo = event.target;
    //     var paiDoAlvo = alvo.parentNode;
    //     var avoDoAlvo = paiDoAlvo.parentNode;

    //     avoDoAlvo.remove();

    //     ul.insertBefore(avoDoAlvo, ul.children[0]);
    // });

    containerInput.addEventListener("dblclick", function (event) {
        event.preventDefault();
        var alvo = event.target;
        var paiDoAlvo = alvo.parentNode;
        paiDoAlvo.remove();
        arrayUl.pop();
        //(arrayUl);
        if (arrayUl.length <= 4) {
            botaoMore.style.pointerEvents = "visible";
        }
    });

    // botaoBasic.style.parentEvent = "visible"; 
});

function insereCertificados() {
    var cert1 = document.getElementById("cert1");
    var cert2 = document.getElementById("cert2");
    var cert3 = document.getElementById("cert3");
    var cert4 = document.getElementById("cert4");
    var cert5 = document.getElementById("cert5");

    var arrayCertificate = JSON.parse(localStorage.certificate);
    
    cert1.value = arrayCertificate[0];

    cert2.value = arrayCertificate[1];

    cert3.value = arrayCertificate[2];

    cert4.value = arrayCertificate[3];

    cert5.value = arrayCertificate[4];
}

function chamaCertificados() {
    //(arrayUl);
}