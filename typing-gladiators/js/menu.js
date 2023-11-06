const menuBtn = document.querySelector('.choose-lang-btn');
const fullscreenMenu = document.getElementById('fullscreen-menu');

menuBtn.addEventListener('click', function () {
  fullscreenMenu.classList.toggle('active');
});

const menuButtons = fullscreenMenu.querySelectorAll('button');

menuButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    fullscreenMenu.classList.remove('active');
  });
});

fullscreenMenu.addEventListener('click', function () {
  fullscreenMenu.classList.remove('active');
});

const leaderBtn = document.getElementById('leaderboard-mobile');

const fullscreenLeaderboard = document.querySelector('.leaderboard');

leaderBtn.addEventListener('click', function () {
  fullscreenLeaderboard.classList.toggle('active');
});

const closeMenu = fullscreenLeaderboard.querySelector('.close-menu');

closeMenu.addEventListener('click', function () {
  fullscreenLeaderboard.classList.remove('active');
});

// placeholder remove on focus

const textInput = document.getElementById('testArea');

const originalPlaceholder = textInput.placeholder;

textInput.addEventListener('focus', function () {
  textInput.placeholder = '';
});

textInput.addEventListener('blur', function () {
  textInput.placeholder = originalPlaceholder;
});
