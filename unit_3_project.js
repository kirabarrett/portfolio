//Let's Play Rock, Paper, Scissors!
//Global Variables
var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;

//player choice, function + log
function getPlayerMove() {
  userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  return userChoice;
};

//getPlayerMove();
//console.log("Player chose " + userChoice);

//computer choice, function + log
computerChoice = "";

function getComputerMove() {
  randomNumber = Math.random();
  if(randomNumber < .33){
    computerChoice = "rock";
  } else if(randomNumber < .66){
   	computerChoice = "paper"; 
  } else {
    computerChoice = "scissors";
  };
  return computerChoice;
};

//getComputerMove();
//console.log("The computer chose " + computerChoice);

//determining a winner
function getWinner(playerMove, computerMove) {
  switch(playerMove) {
    case "rock":
      if(computerMove === "rock") {
      	winner = "tie";
      } else if(computerMove === "paper") {
        winner = "computer";
      } else {
        winner = "player";
      };
      break;
    case "paper":
      if(computerMove === "rock") {
      	winner = "player";
      } else if(computerMove === "paper") {
        winner = "tie";
      } else {
        winner = "computer";
      };
      break;
    case "scissors":
      if(computerMove === "rock") {
      	winner = "computer";
      } else if(computerMove === "paper") {
        winner = "player";
      } else {
        winner = "tie";
      };
      break;
  };
  return winner;
};

//getWinner(userChoice, computerChoice);
//console.log("The winner is " + winner);

//playing to five... and tracking who wins
var x = 0;
function playToFive() {
  console.log("Let's play Rock Paper Scissors");
  playerRunningTotal = 0;
  computerRunningTotal = 0;
  while(x<5) {
    //round played
    getPlayerMove();
    getComputerMove();
    getWinner(userChoice, computerChoice);
    //tallies totaled
    switch(winner) {
      case "tie":
        break;
      case "computer":
        computerRunningTotal += 1;
        break;
      case "player":
        playerRunningTotal += 1;
        break;
    };
    //tallies announced
   alert("Player chose " + userChoice + " while Computer chose " + computerChoice +"! \nThe score is Player "+ playerRunningTotal + ", Computer " + computerRunningTotal + ".");
    x += 1;
  };
};
playToFive();