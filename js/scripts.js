var newGameBtn = document.getElementById("js-newGameButton");
var newGameElem = document.getElementById("js-newGameElement");
var pickElem = document.getElementById("js-playerPickElement");
var resultsElem = document.getElementById("js-resultsTableElement");

newGameBtn.addEventListener('click', newGame);

var playerPointsElem = document.getElementById("js-playerPoints");
    playerNameElem = document.getElementById("js-playerName");
    computerPointsElem = document.getElementById("js-computerPoints");

var pickRock = document.getElementById('js-playerPick_rock');
    pickPaper = document.getElementById('js-playerPick_paper');
    pickScissors = document.getElementById('js-playerPick_scissors');

var playerPickElem = document.getElementById('js-playerPick');
    computerPickElem = document.getElementById('js-computerPick');
    playerResultElem = document.getElementById('js-playerResult');
    computerResultElem = document.getElementById('js-computerResult');

var gameState = ['notStarted', 'started' , 'ended'];
var player = {
        name: '',
    };
var playerScore = 0;   
var computer = {
    };
var computerScore = 0;    

function newGame()  {
    player.name = prompt("Wpisz swoje imie", 'imię gracza');
    if (player.name) {
            playerScore = 0;
            computerScore = 0;
            gameState = 'started';
            setGameElements();
            playerNameElem.innerHTML = player.name;
    }
}  

function setGameElements () {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = "none";
            pickElem.style.display = "block";
            resultsElem.style.display = "block";
        break;    
        case 'ended':
            newGame.innerText = "Jeszcze raz";
        case 'notStarted':
        default:
            newGameElem.style.display =  "block";
            pickElem.style.display = "none";
            resultsElem.style.display = "none";       
    }
}

setGameElements();

function getComputerPick() {
    var possiblePicks = ['kamień', 'papier', 'nożyce'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick (playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

pickRock.addEventListener('click', function(){
    playerPick("kamień");
});

pickPaper.addEventListener('click', function(){
    playerPick("papier");
});

pickScissors.addEventListener('click', function(){
    playerPick("nożyce");
});

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  var winnerIs = 'player' ;
    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'kamień' &&  playerPick == 'nożyce') ||
        (computerPick == 'nożyce' &&  playerPick == 'papier') ||
        (computerPick == 'papier' &&  playerPick == 'kamień') ) {
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        playerScore++;
        playerPointsElem.innerHTML = playerScore;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computerScore++;
        computerPointsElem.innerHTML = computerScore;
    } 
     if(playerScore === 10  || computerScore === 10 ) {
        checkWinner();
    }
}  

function checkWinner (){
    if (playerScore==10) {
        alert("Koniec gry, wygrałeś !");
        newGameBtn.innerText = "Jeszcze raz";
        newGameElem.style.display =  "block";
        pickElem.style.display = "none";
        resultsElem.style.display = "block";
    } else {
        alert("Koniec gry, przegrałeś !")
        newGameBtn.innerText = "Jeszcze raz";
        newGameElem.style.display =  "block";
        pickElem.style.display = "none";
        resultsElem.style.display = "block";
    }    
}