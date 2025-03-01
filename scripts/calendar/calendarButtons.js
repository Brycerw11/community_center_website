var listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var date = currentDate.getDate();
var firstDay = new Date(year,month,1);
var lastDay = new Date(year,month,0).getDate();
var day = firstDay.getDay() + 3;

document.getElementById("calendarMonth").innerHTML = listOfMonths[month];
document.getElementById("calendarYear").innerHTML = year;

for (let i = 0; i < lastDay; i++) {
    $(`.days:nth-of-type(${day+i})`).html(i+1)
}

function monthBack() {
    $(".days").each(function(){$(this).html("")});
    if (month != 0) {
        month--;
    } else {
        month = 11;
        year--;
    }
    updateHTML();
}

function monthForward() {
    $(".days").each(function(){$(this).html("")});
    if (month != 11) {
        month++;
    } else {
        month = 0;
        year++;
    }
    document.getElementById("calendarMonth").innerHTML = listOfMonths[month];
    document.getElementById("calendarYear").innerHTML = year;
    updateHTML();
}

function updateHTML() {
    firstDay = new Date(year,month,1);
    lastDay = new Date(year,month,0).getDate();
    day = firstDay.getDay() + 3;
    document.getElementById("calendarMonth").innerHTML = listOfMonths[month];
    document.getElementById("calendarYear").innerHTML = year;
    for (let i = 0; i < lastDay; i++) {
        $(`.days:nth-of-type(${day+i})`).html(i+1)
    }
}