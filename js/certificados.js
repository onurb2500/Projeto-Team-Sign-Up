var botaoMore = document.getElementById("botaoMore"); 
var arrayUl = []; 

botaoMore.addEventListener("click", function (event) {
    event.preventDefault();
    
    var li = document.createElement("li");

    var ul = document.getElementById("ul");
    ul.appendChild(li);
    console.log(ul); 

    var containerInput = document.createElement("div");
    containerInput.classList.add("button__favorito");
    var inputCertificates = document.getElementById("cerficates");
    var inputCertificatesValue = inputCertificates.value;
    
    var itemCertificados = document.createElement("input");
    containerInput.appendChild(itemCertificados);
    itemCertificados.classList.add("input-favorito");


    var buttonFav = document.createElement("button");
    containerInput.appendChild(buttonFav);
    buttonFav.classList.add("button-favorito");

    li.appendChild(containerInput);


    itemCertificados.value = inputCertificatesValue;

    arrayUl.push(containerInput);
    console.log(arrayUl);

    if(arrayUl.length >= 4) { 
        botaoMore.style.pointerEvents = "none"; 
    }

    // criando li e add na ul
}); 