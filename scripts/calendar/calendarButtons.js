var listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthIndex = 0;
var yearNum = 2025;

const month = document.getElementById("calendarMonth");
const year = document.getElementById("calendarYear");

function monthBack() {
    if (monthIndex != 0) {
        monthIndex--;
    } else {
        monthIndex = 11;
        yearNum--;
    }
    month.textContent = String(listOfMonths[monthIndex]);
    year.textContent = String(yearNum);
}

function monthForward() {
    if (monthIndex != 11) {
        monthIndex++;
    } else {
        monthIndex = 0;
        yearNum++;
    }
    month.textContent = String(listOfMonths[monthIndex]);
    year.textContent = String(yearNum);
}