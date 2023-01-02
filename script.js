'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log('out' + randomNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'Please input the Number';
  } else if (guessedNumber === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Correct Guess';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '25rem';
    let hg = document.querySelector('.highscore').textContent;
    if (score > hg) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guessedNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guessedNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  console.log('in' + randomNumber);
});
