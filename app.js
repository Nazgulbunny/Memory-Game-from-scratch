// all the scripts for the memory game are here

let tileImage = [];
let tileArray =[];
let startButton = document.getElementById("start");
let gamePlay = false;


//event listens

// code to create an array that loops the images

startButton.addEventListener("click",startGame);

for (var i = 1; i < 9; i++){
tileImage.push(i + ".png");

}








//functions

function startGame (){
startButton.style.display ='none';
console.log("started");

}