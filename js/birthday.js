// Instanciando um objeto do tipo date
var date = new Date();

// Pegando o dia, mês e ano
var day = date.getDate();
var month = date.getMonth() + 1 ;
var year = date.getFullYear();

//Pegando o input de dia, mês e ano
var inputDay = document.querySelector("#select-day").value;
var inputMonth = document.querySelector("#select-month").value;
var inputYear = document.querySelector("#select-year").value;

var inputYearEvent = document.querySelector("#select-year");

inputYearEvent.addEventListener("blur", function() {
    
    calcula();
    console.log("teste");
})

function calcula() {

    var age;

    age = year - inputYear;
    console.log(age);
    if(month < inputMonth || month == inputMonth && day < inputDay) {
        age--;
        console.log(age);
    }
    return age;
}

function adiciona(age) {
    var h4 = document.querySelector("#age");
    h4.textContent = age;
}
