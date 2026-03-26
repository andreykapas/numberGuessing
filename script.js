'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const initialScore = 20;
const initialColor = '#222';
const initialWidth = '15rem';
const initialMessge = 'Start guessing...';

let score = initialScore;
let highScore = 0;

const showMessage = message =>
  (document.querySelector('.message').textContent = message);

const setScore = score =>
  (document.querySelector('.score').textContent = score);

const setNumber = number =>
  (document.querySelector('.number').textContent = number);

const setNumberWidth = width =>
  (document.querySelector('.number').style.width = width);

const setBodyBackground = color =>
  (document.querySelector('body').style.backgroundColor = color);

const ifMore = isTrue => {
  let text = isTrue ? 'Too high!' : 'Too low!';

  if (score > 1) {
    showMessage(text);
    score--;
    setScore(score);
  } else {
    showMessage('You lost the game.');
    setScore(0);
  }
};

const clickCheck = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('No number!');
  } else if (guess === secretNumber) {
    showMessage('Correct Number!');
    setNumber(secretNumber);
    setBodyBackground('#60b347');
    setNumberWidth('30rem');
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
  showMessage(initialMessge);
  setBodyBackground(initialColor);
  setScore(score);
  setNumberWidth(initialWidth);
  setNumber('?');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.again').addEventListener('click', clickAgain);
