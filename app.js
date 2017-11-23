// all the scripts for the memory game are here

var tileImages = [];
    var tileArray = [];
    var tileFlippedOver = [];
    var cardFlipped = -1;
    var timer = '';
    var playLockout = false;
    var startButton = document.getElementById('start');
    var gameBoard = document.getElementById('gameboard');
    var gamePlay = false;

    //event listens
    startButton.addEventListener('click', startGame);

    //Functions
    function startGame() {
      startButton.style.display = 'none';
      if (!gamePlay) {
        gamePlay = true;
        buildArray();
        tileArray = tileImages.concat(tileImages);
        shuffleArray(tileArray);
        buildBoard();

      }

    }

    function buildBoard() {
      var html = "";
      for (var x = 0; x <= (tileArray.length - 1); x++) {
        html += '<div class="gameTile"><div class="gameTile">';
        html += '<img id="cardz' + x + '" src="images/back.png" onclick="pickCard(' + x + ',this)" class="flipImage"></div></div>';
      }
      gameBoard.innerHTML = html;
    }

    function isinArray(v, array) {
      return array.indexOf(v) > -1;
    }

    function cardFlip(t, ti) {

      t.src = "images/" + tileArray[ti];
      tileFlippedOver.push(t.id);
      console.log(tileFlippedOver);
    }

    function hideCard() {
      for (var x = 0; x < 2; x++) {
        var vid = tileFlippedOver.pop();
        document.getElementById(vid).src = "images/back.png";
        console.log(vid);
      }
      clearInterval(timer);
      playLockout = false;
      cardFlipped = -1;
    }

    function checkSrc(v) {
      var v = document.getElementById(v).src;
      return v;
    }

    function pickCard(tileIndex, t) {
      // check if its already flipped

      if (!isinArray(t.id, tileFlippedOver) && !playLockout) {
        console.log('not in array');
        if (cardFlipped >= 0) {
          cardFlip(t, tileIndex);
          var secondCard = tileIndex;
          playLockout = true;
          if (checkSrc(tileFlippedOver[tileFlippedOver.length - 1]) == checkSrc(tileFlippedOver[tileFlippedOver.length - 2])) {
            //Match
            console.log('Match');
            playLockout = false;
            cardFlipped = -1;
          } else {
            //No Match
            console.log('No Match');
            timer = setInterval(hideCard, 3000);

          }
        } else {
          cardFlipped = tileIndex;
          cardFlip(t, tileIndex);
        }

      } else {
        console.log('in array');
      }
    }

    function buildArray() {
      for (var x = 1; x < 9; x++) {
        tileImages.push(x + '.png');
      }
    }

    function shuffleArray(array) {
      for (var x = array.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random() * (x + 1));
        var itemValue = array[x];
        array[x] = array[holder];
        array[holder] = itemValue;
      }
      return array;
    }