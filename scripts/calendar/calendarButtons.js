const listOfEvents = {
    "2025-04-01T07:00:00.000Z": "FBLA State Leadership Competition",
    "2025-04-02T07:00:00.000Z": "FBLA State Leadership Competition",
    "2025-04-03T07:00:00.000Z": "FBLA State Leadership Competition",
    "2025-04-10T07:00:00.000Z": "Liberty HS v Deer Valley HS Boys Varsity Basketball Game",
    "2025-05-04T07:00:00.000Z": "Maricopa County Regional Chess Tournament",
}
var listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var firstDay = new Date(year,month,1);
var lastDay = new Date(year,month+1,0).getDate();
var day = firstDay.getDay() + 3;

document.getElementById("calendarMonth").innerHTML = listOfMonths[month];
document.getElementById("calendarYear").innerHTML = year;

for (let i = 0; i < lastDay; i++) {
    $(`.days:nth-of-type(${day+i})`).html(i+1)
    if (currentDate.getDate() == i+1) {
        $(`.days:nth-of-type(${day+i})`).css("background-color","lightblue")
    }
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
    lastDay = new Date(year,month+1,0).getDate();
    day = firstDay.getDay() + 3;
    document.getElementById("calendarMonth").innerHTML = listOfMonths[month];
    document.getElementById("calendarYear").innerHTML = year;
    $(".days").css("background-color","white")
    for (let i = 0; i < lastDay; i++) {
        $(`.days:nth-of-type(${day+i})`).html(i+1)
        if (currentDate.getDate() == i+1 && currentDate.getMonth() == month && currentDate.getFullYear() == year) {
            $(`.days:nth-of-type(${day+i})`).css("background-color","lightblue")
        }
    }
}