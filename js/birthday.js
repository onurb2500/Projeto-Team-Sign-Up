// Instanciando um objeto do tipo date
var date = new Date();

// Pegando o dia, mês e ano
var day = date.getDate();
var month = date.getMonth() + 1 ;
var year = date.getFullYear();

//Pegando o input de dia, mês e ano

var inputYearEvent = document.querySelector("#select-year");
var inputMonthEvent = document.querySelector("#select-month");
var inputDayEvent = document.querySelector("#select-day");


inputYearEvent.addEventListener("click", function() {
    
    calcula();
    adiciona(calcula()); 
});

inputMonthEvent.addEventListener("click", function() {
    if (age.value !== ""){
        calcula();
        adiciona(calcula()); 
    }
});

inputDayEvent.addEventListener("click", function() {
    if (day.value !== ""){
        calcula();
        adiciona(calcula()); 
    }
});

function calcula() {
    var inputDate = document.querySelector("#select-day").value;
    var inputMonthh = document.querySelector("#select-month").value;
    var inputYearr = document.querySelector("#select-year").value;

    var age;

    age = year - inputYearr;
    console.log(inputDate);
    console.log(inputMonthh);
    console.log(inputYearr);


    if(month < inputMonthh || month == inputMonthh && day < inputDate) {
        age--;
    }
    console.log(age);
    return age;
}

function adiciona(age) {
    var h4 = document.querySelector("#age");
    h4.value = age;
}


// var date = new Date();

// // Pegando o dia, mês e ano
// var day = date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();

// //Pegando o input de dia, mês e ano
// var inputDay = document.querySelector("#select-day").value;
// var inputMonth = document.querySelector("#select-month").value;
// var inputYear = document.querySelector("#select-year").value;

// var inputYearEvent = document.querySelector("#select-year");

// inputYearEvent.addEventListener("blur", function() {
//     calcula;
//     console.log(calcula);
// })

// function calcula() {

//     var dayVal;
//     var monthVal;
//     var age;

//     if ((day-inputDay)<0) {
//         dayVal = false;
//     }else {
//         dayVal = true;
//     }
    
//     if ((month-inputMonth)<0) {
//         monthVal = false;
//     }else {
//         monthVal = true;
//     }

//     if (dayVal && monthVal) {
//         age = (year - inputYear)
//     }else{
//         age = ((year - inputYear)-1)
//     }

//     console.log(age);
//     return age;
// }

// function adiciona(age) {
//     var h4 = document.querySelector("#age");
//     h4.textContent = age;
// }


