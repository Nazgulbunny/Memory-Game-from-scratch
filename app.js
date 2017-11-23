// all the scripts for the memory game are here

let tileImage = [];
let tileArray =[];
let startButton = document.getElementById("start");
let gamePlay = false;


//event listens

// code to create an array that loops the images

startButton.addEventListener("click",startGame);










//functions

function startGame (){
startButton.style.display ='none';
if (!gamePlay) {
	gamePlay=true;
	buildArray();
	tileArray=tileImage.concat(tileImage);
	shuffleArray(tileArray);
	console.log(tileArray);
}
console.log("started");

}

//function to build the array
function buildArray(){
	for (var i = 1; i < 9; i++){
tileImage.push(i + ".png");

}
}

function shuffleArray(array){

	for (var i = array.length - 1; i >= 0; i--) {
		var holder = Math.floor(Math.random()* (i + 1));
		var itemValue = array[i];
		array[i] = array[holder];
		array[holder]=itemValue;
	}
	return array;
}