'use strict';
let score = 20;
let highscore = document.querySelector('.highscore').textContent;
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎁 correct number';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    score--;
    document.querySelector('.message').textContent =
      guess > number ? '📈 too high' : '📉 too low';
    if (score < 1) {
      document.querySelector('.message').textContent = '👎 You Lose';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
  //   else {
  //     score--;
  //     document.querySelector('.message').textContent = '📉 too low';
  //     if (score < 1) {
  //       document.querySelector('.message').textContent = '👎 You Lose';
  //       document.querySelector('.score').textContent = 0;
  //     } else {
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
});
