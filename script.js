'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const initialScore = 20;
const initialColor = '#222';
const initialWidth = '15rem';
const initialMessge = 'Start guessing...';

let score = initialScore;
let highScore = 0;

const ifMore = isTrue => {
  let text = isTrue ? 'Too high!' : 'Too low!';

  if (score > 1) {
    document.querySelector('.message').textContent = text;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game.';
    document.querySelector('.score').textContent = 0;
  }
};

const clickCheck = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < secretNumber) {
    ifMore(false);
  } else if (guess > secretNumber) {
    ifMore(true);
  }
};

document.querySelector('.check').addEventListener('click', clickCheck);

const clickAgain = () => {
  score = initialScore;
  document.querySelector('.message').textContent = initialMessge;
  document.querySelector('body').style.backgroundColor = initialColor;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = initialWidth;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.again').addEventListener('click', clickAgain);
