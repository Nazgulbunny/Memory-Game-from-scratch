// all the scripts for the memory game are here
let tileImage = [];
let startButton = document.getElementById("start");


//event listens

// code to create an array that loops the images

startButton = addEventListener("click",startGame);

for (var i = 1; i < 9; i++){
tileImage.push(i + ".png");

}








//functions

function startGame (){
startButton.style.display='none';
console.log("started");

}