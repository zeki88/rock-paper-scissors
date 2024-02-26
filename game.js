const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRock() {
  playRound('rock');
}

function playPaper() {
  playRound('paper');
}

function playScissors() {
  playRound('scissors');
}

function playRound(playerSelection) {
  const computerChoice = getComputerChoice();
  if ((playerSelection === 'rock' && computerChoice === 'scissors') ||
      (playerSelection === 'paper' && computerChoice === 'rock') ||
      (playerSelection === 'scissors' && computerChoice === 'paper')) {
    playerScore++;
    document.querySelector('#result').textContent = `You Win! ${playerSelection} beats ${computerChoice}!`;
  } else if (playerSelection === computerChoice) {
    document.querySelector('#result').textContent = "It's a Draw";
  } else {
    computerScore++;
    document.querySelector('#result').textContent = `You Lose! ${computerChoice} beats ${playerSelection}!`;
  }
  document.querySelector('#score').textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? 'You' : 'Computer';
    document.querySelector('#result').textContent = `${winner} Won the Game!`;
    playerScore = 0;
    computerScore = 0;
    rock.removeEventListener('click', playRock);
    paper.removeEventListener('click', playPaper);
    scissors.removeEventListener('click', playScissors);
    reset.classList.add('visible');
  }
}

reset.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('#score').textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
  rock.addEventListener('click', playRock);
  paper.addEventListener('click', playPaper);
  scissors.addEventListener('click', playScissors);
  reset.classList.remove('visible');
});

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);