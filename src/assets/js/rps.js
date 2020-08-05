const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const message = document.querySelector('.message');
const scoreboard = {
  player: 0,
  computer: 0
};

// Play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show message result
    result.innerHTML = `
      <h1 id="text-win" class="text-win">You Win</h1>
      <i class="fa fa-hand-${computerChoice}-o fa-8x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show message result
    result.innerHTML = `
      <h1 class="text-lose">You Lose</h1>
      <i class="fa fa-hand-${computerChoice}-o fa-8x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fa fa-hand-${computerChoice}-o fa-8x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p id="player">Player: ${scoreboard.player}</p>
    <p id="computer">Computer: ${scoreboard.computer}</p>
    `;

  message.style.display = 'block';
}

// Restart game & clear previous message
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p id="player">Player: 0</p>
    <p id="computer">Computer: 0</p>
  `;
  restart.style.display = 'none';
  message.style.display = 'none';
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);