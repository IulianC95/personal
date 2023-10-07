document.addEventListener('DOMContentLoaded', function () {
  const fazaLungaBtn = document.getElementById('faza-lunga');
  const fazaScurtaBtn = document.getElementById('faza-scurta');
  const pozitiiBtn = document.getElementById('pozitii');
  const semnalStangaBtn = document.getElementById('semnal-stanga');
  const semnalDreaptaBtn = document.getElementById('semnal-dreapta');
  const butonAvarii = document.getElementById('avarii');
  const darkModeBtn = document.getElementById('dark-mode');
  const body = document.body;
  const masina = document.getElementById('masina');
  let intervalIdStanga, intervalIdDreapta;

  function toggleClass(path) {
    if (path.classList.contains('on')) {
      path.classList.remove('on');
    } else {
      path.classList.add('on');
    }
  }

  function toggleSignal(path, intervalId) {
    if (intervalId) {
      clearInterval(intervalId);
      path.classList.remove('on');
      return null;
    } else {
      return setInterval(() => path.classList.toggle('on'), 800);
    }
  }

  fazaLungaBtn.addEventListener('click', function () {
    toggleClass(document.getElementById('faza-lunga-d'));
    toggleClass(document.getElementById('faza-lunga-s'));
  });

  fazaScurtaBtn.addEventListener('click', function () {
    toggleClass(document.getElementById('faza-scurta-d'));
    toggleClass(document.getElementById('faza-scurta-s'));
  });

  pozitiiBtn.addEventListener('click', function () {
    toggleClass(document.getElementById('pozitie-d'));
    toggleClass(document.getElementById('pozitie-s'));
  });

  semnalStangaBtn.addEventListener('click', function () {
    if (intervalIdDreapta) return;
    intervalIdStanga = toggleSignal(
      document.getElementById('semnal-s'),
      intervalIdStanga,
    );
  });

  semnalDreaptaBtn.addEventListener('click', function () {
    if (intervalIdStanga) return;
    intervalIdDreapta = toggleSignal(
      document.getElementById('semnal-d'),
      intervalIdDreapta,
    );
  });

  butonAvarii.addEventListener('click', function () {
    intervalIdStanga = toggleSignal(
      document.getElementById('semnal-s'),
      intervalIdStanga,
    );
    intervalIdDreapta = toggleSignal(
      document.getElementById('semnal-d'),
      intervalIdDreapta,
    );
  });

  darkModeBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    masina.classList.toggle('dark-mode');
  });
});
