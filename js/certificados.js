var botaoMore = document.getElementById("botaoMore"); 
var arrayUl = []; 

botaoMore.addEventListener("click", function (event) {
    event.preventDefault();
    
    console.log(arrayUl);

    

    var li = document.createElement("li");

    var ul = document.getElementById("ul");
    ul.appendChild(li);
    console.log(ul); 

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

    if(arrayUl.length >= 4) { 
        botaoMore.style.pointerEvents = "none"; 
    }

    buttonFav.addEventListener("click", function(event) {
        event.preventDefault();
        var alvo = event.target;
        var paiDoAlvo = alvo.parentNode;
        var avoDoAlvo = paiDoAlvo.parentNode;

        avoDoAlvo.remove();

        ul.insertBefore(avoDoAlvo, ul.children[0]);

        console.log(arrayUl);
    });

    containerInput.addEventListener("dblclick", function(event) {
        event.preventDefault();
        var alvo = event.target;
        var paiDoAlvo = alvo.parentNode;
        paiDoAlvo.remove();
        arrayUl.pop();
        console.log(arrayUl);
    });
}); 

