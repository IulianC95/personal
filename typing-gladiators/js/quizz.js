const allQuestions = {
  javascript: [
    {
      question: "Ce reprezintă 'this' într-un context de funcție JavaScript?",
      answers: [
        { text: 'Referă întotdeauna la obiectul global', correct: false },
        {
          text: 'Referă la elementul HTML care a apelat funcția',
          correct: false,
        },
        { text: 'Referă la obiectul care a invocat funcția', correct: true },
        { text: 'Este o variabilă care stochează o funcție', correct: false },
      ],
    },
    {
      question:
        'Ce metodă JavaScript este folosită pentru a crea noi elemente HTML?',
      answers: [
        { text: 'document.createElement()', correct: true },
        { text: 'document.newElement()', correct: false },
        { text: 'document.addChild()', correct: false },
        { text: 'document.appendElement()', correct: false },
      ],
    },
  ],
  html: [
    {
      question: 'Ce element HTML este folosit pentru a defini un paragraf?',
      answers: [
        { text: '<div>', correct: false },
        { text: '<p>', correct: true },
        { text: '<span>', correct: false },
        { text: '<br>', correct: false },
      ],
    },
    {
      question: 'Cum inserați un comentariu în HTML?',
      answers: [
        { text: '<-- Acesta este un comentariu -->', correct: false },
        { text: '<!–- Acesta este un comentariu -–>', correct: true },
        { text: '/* Acesta este un comentariu */', correct: false },
        { text: '// Acesta este un comentariu', correct: false },
      ],
    },
  ],
  css: [
    {
      question: "Care este selectorul CSS pentru elementele cu clasa 'button'?",
      answers: [
        { text: '.button', correct: true },
        { text: '#button', correct: false },
        { text: 'button', correct: false },
        { text: '*button', correct: false },
      ],
    },
    {
      question:
        "Cum aplici un stil doar pentru paragrafele directe dintr-o clasă 'content'?",
      answers: [
        { text: '.content p', correct: false },
        { text: '.content > p', correct: true },
        { text: '.content + p', correct: false },
        { text: '.content p:first-child', correct: false },
      ],
    },
  ],
  php: [
    {
      question: 'Cum declari o variabilă în PHP?',
      answers: [
        { text: 'var $name;', correct: false },
        { text: 'let $name;', correct: false },
        { text: '$name = value;', correct: true },
        { text: 'create $name = value;', correct: false },
      ],
    },
    {
      question: 'Cum trimiți datele unui formular către server în PHP?',
      answers: [
        { text: 'Folosind metoda GET sau POST', correct: true },
        { text: 'Cu apeluri AJAX', correct: false },
        { text: 'Prin e-mail', correct: false },
        { text: 'Direct, fără o metodă', correct: false },
      ],
    },
  ],
  mysql: [
    {
      question: 'Cum selectezi toate coloanele dintr-un tabel MySQL?',
      answers: [
        { text: 'SELECT * FROM tabel', correct: true },
        { text: 'SELECT tabel.*', correct: false },
        { text: 'SELECT tabel', correct: false },
        { text: 'SHOW tabel', correct: false },
      ],
    },
    {
      question: 'Cum actualizezi un record în MySQL?',
      answers: [
        { text: 'UPDATE tabel SET coloana = valoare', correct: true },
        { text: 'MODIFY tabel SET coloana = valoare', correct: false },
        { text: 'CHANGE tabel SET coloana = valoare', correct: false },
        { text: 'EDIT tabel WHERE coloana = valoare', correct: false },
      ],
    },
  ],
  python: [
    {
      question: 'Cum declari o funcție în Python?',
      answers: [
        { text: 'function myFunc():', correct: false },
        { text: 'def myFunc():', correct: true },
        { text: 'create myFunc():', correct: false },
        { text: 'func myFunc():', correct: false },
      ],
    },
    {
      question: 'Ce face operatorul `==` în Python?',
      answers: [
        { text: 'Atribuie o valoare', correct: false },
        { text: 'Compară valoarea și tipul', correct: false },
        { text: 'Compară doar valoarea', correct: true },
        { text: 'Verifică dacă variabilele sunt identice', correct: false },
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
