var photoNum = 0;
//Please crop all photos to be in a 16:9 aspect ratio
var listOfPhotos = ["./images/PhotoGallery/PhotoGalleryPhotos/West-MEC_NEC_ExteriorPhoto1.jpg", "./images/PhotoGallery/PhotoGalleryPhotos/West-MEC_NEC_ExteriorPhoto2.jpg", "./images/PhotoGallery/PhotoGalleryPhotos/West-MEC_NEC_ExteriorPhoto3.png"];
var listOfAltTexts = ["West-MEC Northeast Campus Exterior", "West-MEC Northeast Campus Exterior", "West-MEC Northeast Campus Exterior"];

const photo = document.getElementById("PhotoGalleryPhoto");
const switchBar = document.getElementById("gallerySwitchBar");
const switchBarParent = document.getElementById("gallerySwitchBarContainer");

function leftButtonClick(){

    photoNum--; //Goes backwards in the cycle (left)
    if(photoNum < 0){ //photoNum can't go negative
        photoNum = listOfPhotos.length -1;
    }
    photo.src = String(listOfPhotos[photoNum]);
    photo.alt= listOfAltTexts[photoNum];

    timerTime = 0; //Resets timer and gives you extra time when you choose the image yourself
}
function rightButtonClick(){

    photoNum++; //Goes forwards in the cycle (right)
    /* listOfPhotos.length will always return 1 more than the id 
    of the last number so it resets when it reaches listOfPhotos.length */
    if(photoNum >= listOfPhotos.length){
        photoNum = 0;
    }
    photo.src = String(listOfPhotos[photoNum]);
    photo.alt = listOfAltTexts[photoNum];

    timerTime = 0; //Resets timer and gives you extra time when you choose the image yourself
}

function autoShift(){
    // Same as rightButtonClick but it doesn't reset the timer

    photoNum++; //Goes forwards in the cycle (right)
    /* listOfPhotos.length will always return 1 more than the id 
    of the last number so it resets when it reaches listOfPhotos.length */
    if(photoNum >= listOfPhotos.length){
        photoNum = 0;
    }
    photo.src = String(listOfPhotos[photoNum]);
    photo.alt = listOfAltTexts[photoNum];
}

var isTimerPaused = false;

function pauseAutoShift(){
    if(isTimerPaused){
        isTimerPaused = false;
    }
    else{
        isTimerPaused = true;
    }
}

var timerTime = 0; //one timerTime = 10ms or 1centisecond
let timerObj = setInterval(moveGalleryForward, 10);
var timerResetTime = 400; //400 = 400centiseconds or 4 seconds

const transitionTimerStartValue = 30; //10 = .1 second transition
var transitionTimer = transitionTimerStartValue; 

function moveGalleryForward(){
    if(isTimerPaused){
        return;
    }
    if (switchBar.classList.contains("tempTransition") && transitionTimer <= 0){
	    switchBar.classList.toggle("tempTransition"); //Remove transition
    }
    else if (transitionTimer >= 0){ transitionTimer--; }
    
    timerTime++;
    if(timerTime > timerResetTime){ 
        autoShift(); //Shift Photo
	    transitionTimer = transitionTimerStartValue; //reset transition timer
	    switchBar.classList.toggle("tempTransition"); //start transition
        
        timerTime = 0;
    }

    var switchBarLength = (200 * timerTime / timerResetTime) //The 200 is the total width of the bar

    switchBar.style.width = switchBarLength.toString() + "px";

}
