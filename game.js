const rck = document.querySelector ('#rck');
const ppr = document.querySelector ('#ppr');
const scs = document.querySelector ('#scs');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(choice) {
  choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {
  let computerChoice = getComputerChoice()
  if ((playerSelection == 'Rock' && computerChoice == 'Scissors') || (playerSelection == 'Paper' && computerChoice == 'Rock') || (playerSelection == 'Scissors' && computerChoice == 'Paper')) {
    playerScore += 1;
    console.log('You Win! '+playerSelection+' beats '+computerChoice+'!');
    document.querySelector('#result').textContent = 'You Win! '+playerSelection+' beats '+computerChoice+'!';
  } else if (playerSelection == computerChoice) {
  	console.log ("It's a Draw");
    document.querySelector('#result').textContent = "It's a Draw";
  } else {
    computerScore += 1;
    console.log('You Lose! '+computerChoice+' beats '+playerSelection+'!');
    document.querySelector('#result').textContent = 'You Lose! '+computerChoice+' beats '+playerSelection+'!'; 
  }
  document.querySelector('#score').textContent = 'Yours score: '+playerScore+' computer score: '+computerScore;
}

rck.addEventListener('click', () => {
  playRound('Rock');
});

ppr.addEventListener('click', () => {
  playRound('Paper');
});

scs.addEventListener('click', () => {
  playRound('Scissors');
});