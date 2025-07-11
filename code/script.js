'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'coreect guessing ....';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 28;
// document.querySelector('.guess').value =3;

// creating the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // input elements have value property

  // no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('no Number');
  }
  // user wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'congratulation you won';
    displayMessage('congretulations you won the game');
    let highScore = (document.querySelector('.highscore').textContent = score);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
  }
  // else if (guess > secretNumber || guess < secretNumber)
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high' : 'too low';
      displayMessage(guess > secretNumber ? 'too high' : 'too low');

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#fc0808';
      // document.querySelector('.message').textContent = 'you lost  the game ';
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'too low';
    //     score--;

    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'you lost  the game ';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = '#fc0808';
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';

  // document.querySelector('.message').textContent = 'start Guessing....';
  displayMessage('start guessing');
  document.querySelector('.highscore').textContent = 0;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// eventHandler =function()

// document.querySelector('.btn check').addEventListener('click', function () {
//   console.log(documnet.querySelector('.guess').value);
// });
