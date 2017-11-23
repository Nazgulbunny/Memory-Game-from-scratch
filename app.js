// all the scripts for the memory game are here

let tileImage = [];
let tileArray =[];
let startButton = document.getElementById("start");
let gamePlay = false;
let gameBoard = document.getElementById("gameboard");
let cardFlipped = -1;

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
	buildBoard()
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
      for (var x = 0; x <= (tileArray.length - 1); x++) {
        html += '<div class="gameTile"><div class="gameTile">';
        html += '<img id="cardz' + x + '" src="images/back.png" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
      }
      gameBoard.innerHTML = html;
    }


  // function to be able to pick up a card
  
    function pickCard(tileIndex, t) {
      console.log(tileIndex);
      console.log(cardFlipped);
      console.log(t.src);
      // check if its already flipped
      if (cardFlipped >= 0) {
        //second cardFlipped
        if (tileIndex != cardFlipped) {
          // second card new
          t.src = "images/" + tileArray[tileIndex];
          var secondCard = tileIndex;
          // check for match

        }
        console.log('second', cardFlipped);
      } else {
        //first cardFlipped
        cardFlipped = tileIndex;
        t.src = "images/" + tileArray[tileIndex];
        console.log('first', cardFlipped);
      }
    } 