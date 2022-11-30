'use strict';

//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//Starting conditions
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let score0Gl = 0;
let score1Gl = 0;
current0.value = 0;
current1.value = 0;
let playing = true;

//Switching player function
const switchPl = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling Dice functionalty
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random dice roll
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    //Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    //Check if rolled 1
    if (diceRoll !== 1) {
      //Add dice to current score
      currentScore = currentScore + diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      win();
    }
    //Switch to other player
    else switchPl();
  } else {
  }
});

//Functionality of hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    win();
    switchPl();
  }
});

//Checking game win condition
const win = function () {
  if (scores[activePlayer] >= 100) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
};

//Functionality of new game button
btnNew.addEventListener('click', function () {
  window.location.reload();
});
