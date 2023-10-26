function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.querySelector('#hour-1 p').textContent = hours[0];
  document.querySelector('#hour-2 p').textContent = hours[1];
  document.querySelector('#minutes-1 p').textContent = minutes[0];
  document.querySelector('#minutes-2 p').textContent = minutes[1];
  document.querySelector('#seconds-1 p').textContent = seconds[0];
  document.querySelector('#seconds-2 p').textContent = seconds[1];
}

updateClock();

setInterval(updateClock, 1000);

function updateDate() {
  const now = new Date();
  const day = now.getDate();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[now.getMonth()];

  document.querySelector('#day p').textContent = day;
  document.querySelector('#month p').textContent = month;
}

updateDate();

setInterval(updateDate, 24 * 60 * 60 * 1000);

// stop watch
let intervalId = null;
let elapsedTime = 0;
let isPaused = false;

function displayTime(timeInMilliseconds) {
  const minutes = Math.floor(timeInMilliseconds / 60000);
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);

  document.querySelector('#sw-hour-1 p').textContent = String(minutes).padStart(
    2,
    '0',
  )[0];
  document.querySelector('#sw-hour-2 p').textContent = String(minutes).padStart(
    2,
    '0',
  )[1];
  document.querySelector('#sw-min-1 p').textContent = String(seconds).padStart(
    2,
    '0',
  )[0];
  document.querySelector('#sw-min-2 p').textContent = String(seconds).padStart(
    2,
    '0',
  )[1];
  document.querySelector('#sw-sec-1 p').textContent = String(
    milliseconds,
  ).padStart(2, '0')[0];
  document.querySelector('#sw-sec-2 p').textContent = String(
    milliseconds,
  ).padStart(2, '0')[1];
}

function startStopRestart() {
  const startButton = document.querySelectorAll('.start-button')[0];
  const pauseButton = document.querySelectorAll('.start-button')[1];

  if (
    startButton.textContent === 'Start' ||
    startButton.textContent === 'Restart'
  ) {
    if (startButton.textContent === 'Restart') {
      elapsedTime = 0;
      displayTime(elapsedTime);
      pauseButton.textContent = 'Pause';
    }
    intervalId = setInterval(() => {
      elapsedTime += 10;
      displayTime(elapsedTime);
    }, 10);
    startButton.textContent = 'Stop';
    startButton.style.background = '#83482f';
    startButton.style.color = 'white';
    isPaused = false;
  } else {
    clearInterval(intervalId);
    intervalId = null;
    startButton.textContent = 'Restart';
    startButton.style.removeProperty('background');
    startButton.style.removeProperty('color');
  }
}

function pauseResumeStopwatch() {
  const pauseButton = document.querySelectorAll('.start-button')[1];

  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    pauseButton.textContent = 'Play';
    pauseButton.style.background = '#5e6132';
    pauseButton.style.color = 'white';
    isPaused = true;
  } else if (isPaused) {
    intervalId = setInterval(() => {
      elapsedTime += 10;
      displayTime(elapsedTime);
    }, 10);
    pauseButton.textContent = 'Pause';
    pauseButton.style.removeProperty('background');
    pauseButton.style.removeProperty('color');
    isPaused = false;
  }
}

document
  .querySelectorAll('.start-button')[0]
  .addEventListener('click', startStopRestart);
document
  .querySelectorAll('.start-button')[1]
  .addEventListener('click', pauseResumeStopwatch);
// /stop watch

function updateAnalogClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = (second / 60) * 360;
  const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
  const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;

  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  if (secondDeg === 0) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition =
      'transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)';
  }

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

updateAnalogClock();
setInterval(updateAnalogClock, 1000);

document.addEventListener('DOMContentLoaded', function () {
  const alarmForm = document.getElementById('alarmForm');
  const alarmButton = document.getElementById('alarmButton');
  const alarmContainer = document.querySelector('.alarm');

  let canStop = false;
  let alarmSet = false;

  alarmForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const alarmTime = document.getElementById('alarmTime').value;

    if (!alarmTime) {
      alert('Vă rugăm să setați ora alarmei.');
      return;
    }

    if (alarmSet) {
      return;
    }

    alarmSet = true;

    const [hour, minute] = alarmTime.split(':').map(Number);
    const alarmInMs = hour * 60 * 60 * 1000 + minute * 60 * 1000;

    const now = new Date();
    const nowInMs =
      now.getHours() * 60 * 60 * 1000 +
      now.getMinutes() * 60 * 1000 +
      now.getSeconds() * 1000;

    let timeout = alarmInMs - nowInMs;

    if (timeout < 0) {
      timeout += 24 * 60 * 60 * 1000;
    }

    setTimeout(function () {
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.play();

      alarmButton.innerText = 'Stop';
      alarmButton.style.background = 'orange';
      alarmButton.style.color = 'black';
      alarmButton.style.width = '150px';
      alarmButton.style.height = '80px';
      alarmSet = false;

      alarmButton.style.position = 'absolute';

      // Utilizatorul nu poate opri alarma pentru urmatoarele 10 secunde
      canStop = false;

      const moveButtonInterval = setInterval(() => {
        if (!canStop) {
          const containerWidth = alarmContainer.clientWidth;
          const containerHeight = alarmContainer.clientHeight;

          const x = Math.floor(
            Math.random() * (containerWidth - alarmButton.clientWidth),
          );
          const y = Math.floor(
            Math.random() * (containerHeight - alarmButton.clientHeight),
          );

          alarmButton.style.left = `${x}px`;
          alarmButton.style.top = `${y}px`;
        } else {
          clearInterval(moveButtonInterval);
          alarmButton.removeAttribute('style');
        }
      }, 500);

      setTimeout(() => {
        canStop = true;
      }, 10000);
    }, timeout);
  });

  alarmButton.addEventListener('click', function () {
    if (canStop) {
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.pause();
      alarmButton.innerText = 'Set Alarm';
      alarmButton.removeAttribute('style');
    }
  });
});
