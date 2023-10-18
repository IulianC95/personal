document.getElementById('btn-yes').addEventListener('click', function () {
  const yesForm = document.getElementById('yes-form');
  const noForm = document.getElementById('no-form');
  const contactForm = document.getElementById('contact');

  contactForm.classList.add('form-hidden');
  contactForm.classList.remove('form-visible');

  noForm.classList.add('form-hidden');
  noForm.classList.remove('form-visible');

  setTimeout(() => {
    yesForm.style.display = 'block';
    noForm.style.display = 'none';
    contactForm.style.display = 'none';

    yesForm.classList.add('form-visible');
    yesForm.classList.remove('form-hidden');
  }, 500);

  if (window.navigator.vibrate) {
    window.navigator.vibrate(200);
  }
});

document.getElementById('btn-no').addEventListener('click', function () {
  const yesForm = document.getElementById('yes-form');
  const noForm = document.getElementById('no-form');
  const contactForm = document.getElementById('contact');

  contactForm.classList.add('form-hidden');
  contactForm.classList.remove('form-visible');

  yesForm.classList.add('form-hidden');
  yesForm.classList.remove('form-visible');

  setTimeout(() => {
    noForm.style.display = 'block';
    yesForm.style.display = 'none';
    contactForm.style.display = 'none';

    noForm.classList.add('form-visible');
    noForm.classList.remove('form-hidden');
  }, 500);
});

document.getElementById('btn-yes-lg').addEventListener('click', function () {
  const yesForm = document.getElementById('yes-form-lg');
  const noForm = document.getElementById('no-form-lg');
  const contactForm = document.getElementById('contact-lg');

  contactForm.classList.add('form-hidden');
  contactForm.classList.remove('form-visible');

  noForm.classList.add('form-hidden');
  noForm.classList.remove('form-visible');

  setTimeout(() => {
    yesForm.style.display = 'block';
    noForm.style.display = 'none';
    contactForm.style.display = 'none';

    yesForm.classList.add('form-visible');
    yesForm.classList.remove('form-hidden');
  }, 500);

  if (window.navigator.vibrate) {
    window.navigator.vibrate(200);
  }
});

document.getElementById('btn-no-lg').addEventListener('click', function () {
  const yesForm = document.getElementById('yes-form-lg');
  const noForm = document.getElementById('no-form-lg');
  const contactForm = document.getElementById('contact-lg');

  contactForm.classList.add('form-hidden');
  contactForm.classList.remove('form-visible');

  yesForm.classList.add('form-hidden');
  yesForm.classList.remove('form-visible');

  setTimeout(() => {
    noForm.style.display = 'block';
    yesForm.style.display = 'none';
    contactForm.style.display = 'none';

    noForm.classList.add('form-visible');
    noForm.classList.remove('form-hidden');
  }, 500);
});

document.addEventListener('scroll', function () {
  const valuesDiv = document.querySelector('.values-lg div:nth-of-type(2)');
  const valuesImg = document.querySelector(
    '.values-lg div:nth-of-type(2) div img',
  );

  const rect = valuesDiv.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    valuesDiv.classList.add('slide-in-left');
    valuesImg.classList.add('slide-in-right');
  }
});

document.addEventListener('scroll', function () {
  const valuesImg = document.querySelector('.values-img');
  const slideMenu = document.querySelector('.slide-menu');

  const rectImg = valuesImg.getBoundingClientRect();
  const rectMenu = slideMenu.getBoundingClientRect();

  if (rectImg.top <= window.innerHeight && rectImg.bottom >= 0) {
    valuesImg.classList.add('slide-in-left');
  }

  if (rectMenu.top <= window.innerHeight && rectMenu.bottom >= 0) {
    slideMenu.classList.add('slide-in-right');
  }
});
