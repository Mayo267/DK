


var numOfDrums = document.querySelectorAll(".drum").length;

//Drum Samples//
const snare = new Audio("./sounds/snare.mp3");
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

//Click Loop//
for(var i = 0; i < numOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        console.log(this);

    });

}

