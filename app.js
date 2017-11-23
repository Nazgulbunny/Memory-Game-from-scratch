// all the scripts for the memory game are here

let tileImage = [];
let tileArray =[];
let startButton = document.getElementById("start");
let gamePlay = false;
let board = document.getElementById("gameboard");

//event listens

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

//function to build the board

    function buildBoard() {
      var html = "";
      for (var i = 0; i <= (tileArray.length - 1); i++) {
        html += '<div class="gameTile"><div class="gameTile">';
        html += '<img id="cardz' + i + '" src="images/back.jpg" onclick="pickCard(' + i + ',this)" class="flipImage"></div></div>';
      }
      board.innerHTML = html;
    }