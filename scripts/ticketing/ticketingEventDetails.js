const selectElement = document.getElementById("eventSelection");

//GMT-7:00 is Phoenix, AZ's time offset, 7 hours after UTC/GMT time
//Not specifying a time makes the Date object default to midnight
//If an event is only one day, it must have a time entered for the eventStartDate
//Mult-day events may optionally include times for wither the start or end
// multiDayTime should be true if start and end times are specified. (can be anything if only single day as time will be included anyways)

//Date(Month day, year hh:mm:ss GMT-offset)
const stateCompEvtDeets = {
    eventName: "FBLA Arizona State Competition",
    eventDescription: "The State Leadership Conference is the premier conference on FBLA Arizona's schedule. Compete in your competitive events for the chance to advance to the National Leadership Conference.",

    eventStartDate: new Date('April 1, 2025 00:00:00 GMT-07:00'),
    eventEndDate: new Date('April 3, 2025 00:00:00 GMT-07:00'),
    multiDayTime: false,
};
const libertyVsDeerBasketballEvtDeets = {
    eventName: "Liberty HS vs Deer Valley HS Varsity Basketball Game",
    eventDescription: "Experience this exciting game from two top-level high school teams! Only at West-MEC Community Center.",

    eventStartDate: new Date('April 10, 2025 16:30:00 GMT-07:00'),
    eventEndDate: new Date('April 10, 2025 18:30:00 GMT-07:00'),
    multiDayTime: true,
};
const maricopaChessEvtDeets = {
    eventName: "Maricopa County Regional Chess Tournament",
    eventDescription: "A chess tournament for residents of the Maricopa County.",

    eventStartDate: new Date('May 4, 2025 12:30:00 GMT-07:00'),
    eventEndDate: new Date('May 4, 2025 15:45:00 GMT-07:00'),
    multiDayTime: true,
};

function onEventUpdate(){
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

const evtNameDiv = document.getElementById("evtNameDiv");
const evtDateDiv = document.getElementById("evtDateDiv");
const evtDescDiv = document.getElementById("evtDescDiv");

function updateSiteDetails(evt){
    evtNameDiv.innerHTML = evt.eventName;
    evtDescDiv.innerHTML = evt.eventDescription;

    var startDate = evt.eventStartDate;
    var hasMultiDayTime = evt.multiDayTime;
    var currentDateString = ""
    const endDate = evt.eventEndDate;
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December,"];

    //Add start date info
    currentDateString += dayNames[startDate.getDay()] + ", "; //Add day of week (e.g. Friday)
    currentDateString += monthNames[startDate.getMonth()] + " "; //Add month (e.g. March)
    currentDateString += startDate.getDate() + getDateEnding( startDate.getDate() ) + ", "; //Add date (e.g. 20th); getDateEnding() returns the ordinal indicator of the date inputted (e.g. "th" for 5 and "nd" for 2)
    currentDateString += startDate.getFullYear(); // Add Year (e.g. 2020)

    if (startDate.toDateString() == endDate.toDateString()){ //If a one day event
        currentDateString += " <br>"; // Adds spaceing between time and date

        //Add start time
        currentDateString += intToStringWithZeros(startDate.getHours(), 2) + ":" + intToStringWithZeros(startDate.getMinutes(), 2);

        //If it has an end time, then add the end time
        if (startDate.getTime() != endDate.getTime()){
            currentDateString += " to ";
            currentDateString += intToStringWithZeros(endDate.getHours(), 2) + ":" + intToStringWithZeros(endDate.getMinutes(), 2);
            currentDateString += " MST (UTC-07:00)";
        }
        else{ //else, add Timezone info
            currentDateString += " MST (UTC-07:00)";
        }
    }
    else{ //If a multi-day event

        //adds start time if it specifies it
        if(hasMultiDayTime){
            currentDateString += " at "
            currentDateString += intToStringWithZeros(startDate.getHours(), 2) + ":" + intToStringWithZeros(startDate.getMinutes(), 2);
            currentDateString += " MST (UTC-07:00)";
        }

        //Seperates dates
        currentDateString += " <br> <span class='multiDayEventDaySeperator'>to</span> <br> "; 

        //Add end date info
        currentDateString += dayNames[endDate.getDay()] + ", "; //Add day of week (e.g. Friday)
        currentDateString += monthNames[endDate.getMonth()] + " "; //Add month (e.g. March)
        currentDateString += endDate.getDate() + getDateEnding( endDate.getDate() ) + ", "; //Add date (e.g. 20th); getDateEnding() returns the ordinal indicator of the date inputted (e.g. "th" for 5 and "nd" for 2)
        currentDateString += endDate.getFullYear(); // Add Year (e.g. 2020)

        //adds end time if it specifies it
        if(hasMultiDayTime){
            currentDateString += " at "
            currentDateString += intToStringWithZeros(endDate.getHours(), 2) + ":" + intToStringWithZeros(endDate.getMinutes(), 2);
            currentDateString += " MST (UTC-07:00)";
        }
    }

    //console.log(currentDateString)
    evtDateDiv.innerHTML = currentDateString.toString();
}

//Functions for Time Fetching
function getDateEnding(date){
    var dateStr = date.toString()
    var endingChr = dateStr[dateStr.length -1];

    if (date > 10 && date < 20){ return "th"; } //all dates in teens end in th

    if (endingChr == "1"){
        return "st"
    }
    else if (endingChr == "2"){
        return "nd"
    }
    else if (endingChr == "3"){
        return "rd"
    }
    return "th"
}
function intToStringWithZeros(int, minLength){   
    currentStr = int.toString();
    if (currentStr.length >= minLength){
        return currentStr;
    }
    else{
        while (!(currentStr.length >= minLength)){
            currentStr = "0" + currentStr;
        }
        return currentStr;
    }
}
