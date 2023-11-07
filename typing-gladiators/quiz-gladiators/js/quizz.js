const allQuestions = {
  javascript: [
    {
      question: "Care este scopul 'use strict' în JavaScript?",
      answers: [
        { text: 'Permite utilizarea eval într-un mod sigur', correct: false },
        {
          text: 'Impune un mod mai strict de parsare și executare a codului',
          correct: true,
        },
        {
          text: 'Activează optimizări de performanță în motorul JavaScript',
          correct: false,
        },
        {
          text: 'Restrânge și aruncă erori pentru comportamente nesigure',
          correct: false,
        },
      ],
    },
    {
      question:
        'Cum se declara o variabilă care nu-și poate schimba valoarea în JavaScript?',
      answers: [
        { text: 'let', correct: false },
        { text: 'var', correct: false },
        { text: 'const', correct: true },
        { text: 'static', correct: false },
      ],
    },
  ],
  python: [
    {
      question: 'Cum poți verifica tipul unei variabile în Python?',
      answers: [
        { text: 'type(variable)', correct: true },
        { text: 'varType(variable)', correct: false },
        { text: 'typeof(variable)', correct: false },
        { text: 'getType(variable)', correct: false },
      ],
    },
    {
      question: 'Ce face operatorul `//` în Python?',
      answers: [
        { text: 'Comentariu', correct: false },
        { text: 'Împărțire', correct: false },
        { text: 'Împărțire floor', correct: true },
        { text: 'Împărțire exactă', correct: false },
      ],
    },
  ],
  java: [
    {
      question:
        'Care dintre următoarele cuvinte cheie este folosit pentru a moșteni o clasă în Java?',
      answers: [
        { text: 'super', correct: false },
        { text: 'this', correct: false },
        { text: 'extends', correct: true },
        { text: 'implements', correct: false },
      ],
    },
    {
      question: 'Care este dimensiunea unui întreg (int) în Java?',
      answers: [
        { text: '8 bit', correct: false },
        { text: '16 bit', correct: false },
        { text: '32 bit', correct: true },
        { text: '64 bit', correct: false },
      ],
    },
  ],
};

function selectLanguage(language) {
  questions = selectRandomQuestions(allQuestions[language], 10);
  document.querySelector('.language-selection').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  startGame();
}

function selectRandomQuestions(questionSet, numQuestions) {
  return shuffleArray(questionSet).slice(0, numQuestions);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = `
    <div class="question" id="question"></div>
    <div class="choices" id="choices"></div>
  `;
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  questionElement.innerText = question.question;
  choicesElement.innerHTML = '';
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index, answer.correct));
    choicesElement.appendChild(button);
  });
}

function selectAnswer(choiceIndex, isCorrect) {
  const buttons = document.querySelectorAll('#choices .btn');

  buttons.forEach((button) => {
    button.disabled = true;
  });

  const selectedButton = buttons[choiceIndex];
  if (isCorrect) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();

      buttons.forEach((button) => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
      });
    } else {
      showResults();
    }
  }, 1500);
}

function saveScore() {
  const name = prompt('Introdu numele pentru a salva scorul:');
  if (name) {
    fetch('php/quiz-leaderboard.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, score: score }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Scorul a fost salvat!');
        updateLeaderboard();
        document.getElementById('save-score-btn').remove();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

function showLanguageSelection() {
  document.getElementById('quiz-container').style.display = 'none';

  document.querySelector('.language-selection').style.display = 'flex';

  questions = [];
  score = 0;
}

function showResults() {
  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = `
    <h1>Rezultat</h1>
    <p>Ai obtinut ${score} din ${questions.length} puncte.</p>
    <button class="btn" id="save-score-btn" onclick="saveScore()">Salveaza scorul</button>
    <button class="btn" onclick="startGame()">Incepe din nou</button>
    <button class="btn" onclick="showLanguageSelection()">Schimba limbajul</button>
  `;
}

function updateLeaderboard() {
  fetch('php/quiz-leaderboard.php')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const leaderboardElement = document.getElementById('leaderboard');
      leaderboardElement.innerHTML = data
        .map((user) => `${user.username}: ${user.score}`)
        .join('<br>');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateLeaderboard();
});

window.startGame = startGame;
window.selectLanguage = selectLanguage;

const closeMenu2 = document.querySelector('.close-menu2');

closeMenu2.addEventListener('click', function () {
  slideMenu.classList.remove('active');
});
const slideMenu = document.querySelector('.slide-menu');
const featuresMenu = document.getElementById('features-menu');

featuresMenu.addEventListener('click', function (event) {
  event.stopPropagation();
  slideMenu.classList.toggle('active');
});

slideMenu.addEventListener('click', function () {
  slideMenu.classList.remove('active');
});

document.addEventListener('click', function (event) {
  if (!slideMenu.contains(event.target)) {
    slideMenu.classList.remove('active');
  }
});

slideMenu.addEventListener('click', function (event) {
  event.stopPropagation();
});
