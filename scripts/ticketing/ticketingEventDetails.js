const selectElement = document.getElementById("eventSelection");
const stateCompEvtDeets = {
    eventName: "FBLA Arizona State Competition",
    eventDescription: "The State Leadership Conference is the premier conference on FBLA Arizona's schedule. Compete in your competitive events for the chance to advance to the National Leadership Conference.",

    //GMT-7:00 is Phoenix, AZ's time offset, 7 hours after UTC/GMT time
    //Not setting a time default to midnight
    eventStartDate: new Date('April 1, 2025 00:00:00 GMT-07:00'),
    eventEndDate: new Date('April 3, 2025 00:00:00 GMT-07:00'),
};
const libertyVsDeerBasketballEvtDeets = {
    eventName: "Liberty HS vs Deer Valley HS Varsity Basketball Game",
    eventDescription: "Expierence this exciting game from two top-level high school teams! Only at West-MEC Community Center.",

    //GMT-7:00 is Phoenix, AZ's time offset, 7 hours after UTC/GMT time
    eventStartDate: new Date('April 10, 2025 16:30:00 GMT-07:00'),
    eventEndDate: new Date('April 10, 2025 18:30:00 GMT-07:00'),
};
const maricopaChessEvtDeets = {
    eventName: "Maricopa County Chess Tournament",
    eventDescription: "",

    //GMT-7:00 is Phoenix, AZ's time offset, 7 hours after UTC/GMT time
    eventStartDate: new Date('May 4, 2025 12:30:00 GMT-07:00'),
    eventEndDate: new Date('May 4, 2025 15:45:00 GMT-07:00'),
};

function onEventUpdate(){
    console.log(selectElement.value);

    if (selectElement.value == "fblaAzState"){
        updateSiteDetails(stateCompEvtDeets);
    }
    else if (selectElement.value == "hsBasketballGame"){
        updateSiteDetails(libertyVsDeerBasketballEvtDeets)
    }
    else if (selectElement.value == "maricopaChess"){
        updateSiteDetails(maricopaChessEvtDeets)
    }
}

const evtNameSpan = document.getElementById("evtNameSpan");
const evtDateSpan = document.getElementById("evtDateSpan");
const evtDescSpan = document.getElementById("evtDescSpan");

function updateSiteDetails(evt){
    evtNameSpan.innerHTML = evt.eventName;
    evtDescSpan.innerHTML = evt.eventDescription;

    var startDate = evt.eventStartDate;
    var currentDateString = ""
    const endDate = evt.eventEndDate;
    const dayNames = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];

    if (startDate.toDateString() == endDate.toDateString()){ //If a one day event
        // Add day of week
        currentDateString += dayNames[startDate.getDay()];
    }

    console.log(currentDateString)

    evtDateSpan.innerHTML = currentDateString.toString();
}