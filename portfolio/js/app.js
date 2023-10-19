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

window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;
  const images = document.querySelectorAll('.project-images-lg img');
  const imagesContainer = document.querySelector('.project-images-lg');
  const containerTop = imagesContainer.offsetTop;
  const containerBottom = containerTop + imagesContainer.offsetHeight;

  images.forEach((img) => {
    if (
      scrolled + window.innerHeight < containerTop ||
      scrolled > containerBottom
    ) {
      img.classList.add('color-overlay');
    } else {
      img.classList.remove('color-overlay');
    }
  });
});

let hasAnimatedDesktop = false;
let hasAnimatedMobile = false;

function animateImages(containerSelector, imageSelector, flag) {
  const scrolled = window.scrollY;
  const images = document.querySelectorAll(imageSelector);
  const imagesContainer = document.querySelector(containerSelector);
  const containerTop = imagesContainer.offsetTop;

  if (!flag && scrolled + window.innerHeight >= containerTop) {
    flag = true;

    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = 1;

        img.classList.add('zoomIn');

        img.addEventListener('animationend', function () {
          img.classList.remove('zoomIn');
          img.classList.add('slightRotate');
        });
      }, index * 500);
    });
  }
}

window.addEventListener('scroll', function () {
  animateImages(
    '.my-projects-lg .project-images-lg',
    '.my-projects-lg .project-images-lg img',
    hasAnimatedDesktop,
  );
  animateImages(
    '.projects .projects-images',
    '.projects .projects-images img',
    hasAnimatedMobile,
  );
});

document.addEventListener('DOMContentLoaded', function () {
  const techImages = document.querySelectorAll('.technologies img');

  techImages.forEach((img) => {
    let lastMouseX = null;
    let totalRotation = 0;

    img.addEventListener('mousemove', function (event) {
      if (lastMouseX === null) {
        lastMouseX = event.clientX;
        return;
      }

      const deltaX = event.clientX - lastMouseX;
      totalRotation += deltaX * 1;

      img.style.transform = `rotateY(${totalRotation}deg)`;

      if (Math.abs(totalRotation) >= 360) {
        totalRotation = 0;
      }

      lastMouseX = event.clientX;
    });

    img.addEventListener('mouseleave', function () {
      img.style.transform = 'rotateY(0deg)';
      totalRotation = 0;
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  const body = document.querySelector('body');
  const menuLinks = mobileMenu.querySelectorAll('a');

  hamburgerMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
    body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    body.style.overflow = 'auto';
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
      body.style.overflow = 'auto';
    });
  });
});

window.addEventListener('deviceorientation', function (event) {
  const techImages = document.querySelectorAll('.technologies-mobile img');
  const ownerImg = document.querySelector('.mobile-menu .owner-img img'); // Selectează owner-img
  const gamma = event.gamma / 3;

  techImages.forEach((img) => {
    img.style.transform = `rotateY(${gamma}deg)`;
  });

  ownerImg.style.transform = `rotateY(${gamma}deg)`;
});
