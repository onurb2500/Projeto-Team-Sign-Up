var botaoMore = document.getElementById("botaoMore"); 
var arrayUl = []; 

botaoMore.addEventListener("click", function (event) {
    event.preventDefault();

    var inputCertificates = document.getElementById("cerficates");
    var inputCertificatesValue = inputCertificates.value;

    var itemCertificados = document.createElement("input");

    itemCertificados.value = inputCertificatesValue;

    arrayUl.push(itemCertificados);
    console.log(arrayUl);

    if(arrayUl.length >= 4) { 
        botaoMore.style.pointerEvents = "none"; 
    }

    // criando li e add na ul
    var li = document.createElement("li");
    li.appendChild(itemCertificados);  

    var ul = document.getElementById("ul");
    ul.appendChild(li);
    console.log(ul); 
}); 