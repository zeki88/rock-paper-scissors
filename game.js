function getComputerChoice(choice) {
  choice = Math.floor(Math.random() * (3 - 1) + 1);
  return choice;
}

function playerSelection(choice) {
	choice = Number(window.prompt("Type a number", ""));
  return choice;
}

function playRound(playerSelection, getComputerChoice) {
  if ((playerSelection == 1 && getComputerChoice == 3) || (playerSelection == 2 && getComputerChoice == 1) || (playerSelection == 3 && getComputerChoice == 2)) {
  	console.log ("Win");
  } else if (playerSelection == getComputerChoice) {
  	console.log ("Draw");
  } else {
    console.log ("Lose")
  }
}


getComputerChoice();
playerSelection ();
console.log (playerSelection);