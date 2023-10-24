document.addEventListener('DOMContentLoaded', function () {
  const feedbackDiv = document.querySelector('.feedback');
  feedbackDiv.textContent = 'Guess the number between 1 and 100';
  feedbackDiv.style.fontSize = `12px`;
});

let randomNumber = Math.floor(Math.random() * 100) + 1;

const inputElement = document.getElementById('answer');
const submitButton = document.querySelector('button');
const feedbackDiv = document.querySelector('.feedback');

inputElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

const updateInputWidth = () => {
  const mainApp = document.querySelector('.main-app');
  const mainAppWidth = mainApp.offsetWidth;
  const inputWidth = mainAppWidth * 0.9;
  inputElement.style.width = `${inputWidth}px`;
};

updateInputWidth();

window.addEventListener('resize', updateInputWidth);

const createConfetti = () => {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.animationDelay = `${Math.random()}s`;

    document.body.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
};

const checkGuess = () => {
  const userGuess = parseInt(inputElement.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedbackDiv.textContent = 'Enter a number between 1 and 100.';
    feedbackDiv.style.color = 'red';
    return;
  }

  if (userGuess === randomNumber) {
    feedbackDiv.textContent = 'CORECT!';
    feedbackDiv.style.color = 'green';
    createConfetti();
    submitButton.textContent = 'Restart';
    submitButton.removeEventListener('click', checkGuess);
    submitButton.addEventListener('click', restartGame);

    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
  } else {
    feedbackDiv.textContent = 'INCORECT! ';
    feedbackDiv.style.color = 'red';

    if (userGuess > randomNumber) {
      feedbackDiv.textContent += 'Too high.';
    } else {
      feedbackDiv.textContent += 'Too low.';
    }

    feedbackDiv.classList.add('shake-animation');

    setTimeout(() => {
      feedbackDiv.classList.remove('shake-animation');
    }, 200);

    if ('vibrate' in navigator) {
      navigator.vibrate(800);
    }
  }
};

const restartGame = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  inputElement.value = '';
  feedbackDiv.textContent = '';
  submitButton.textContent = 'Submit';
  feedbackDiv.textContent = 'Guess the number between 1 and 100';
  feedbackDiv.style.color = 'black';

  const allConfetti = document.querySelectorAll('.confetti');
  allConfetti.forEach((confetti) => confetti.remove());

  submitButton.removeEventListener('click', restartGame);
  submitButton.addEventListener('click', checkGuess);
};

submitButton.addEventListener('click', checkGuess);
