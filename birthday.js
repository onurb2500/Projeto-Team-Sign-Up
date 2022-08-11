// Instanciando um objeto do tipo date
var date = new Date();

// Pegando o dia, mês e ano
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

//Pegando o input de dia, mês e ano
var inputDay = document.querySelector("#select-day").value;
var inputMonth = document.querySelector("#select-month").value;
var inputYear = document.querySelector("#select-year").value;

var inputYearEvent = document.querySelector("#select-year");

inputYearEvent.addEventListener("blur", CalEAdd)

function calcula() {

    var dayVal;
    var monthVal;
    var age;

    if ((day-inputDay)<0) {
        dayVal = false;
    }else {
        dayVal = true;
    }
    
    if ((month-inputMonth)<0) {
        monthVal = false;
    }else {
        monthVal = true;
    }

    if (dayVal && monthVal) {
        age = (year - inputYear)
    }else{
        age = ((year - inputYear)-1)
    }

    return age;
}

function adiciona() {
    var h4 = document.querySelector("#age");
    h4.innerHTML = age;
}

function CalEAdd() {
    calcula();
    adiciona();
}
