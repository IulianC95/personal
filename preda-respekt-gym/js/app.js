function toggleContent() {
  const ourMission = document.querySelector('.our-mission');
  const trainers = document.querySelector('.trainers');
  const seeOffer = document.querySelector('.see-offer-lg');

  if (getComputedStyle(ourMission).display !== 'none') {
    switchSection(ourMission, trainers);
  } else if (getComputedStyle(trainers).display !== 'none') {
    switchSection(trainers, seeOffer);
  } else {
    switchSection(seeOffer, ourMission);
  }
}

function switchSection(hideSection, showSection) {
  hideSection.classList.add('slide-out');
  showSection.classList.add('slide-in');
  setTimeout(() => {
    hideSection.style.display = 'none';
    showSection.style.display = 'flex';
    hideSection.classList.remove('slide-out');
  }, 400);
}
function showOffer() {
  const ourMission = document.querySelector('.our-mission');
  const trainers = document.querySelector('.trainers');
  const seeOffer = document.querySelector('.see-offer-lg');

  if (getComputedStyle(ourMission).display !== 'none') {
    switchSection(ourMission, seeOffer);
  } else if (getComputedStyle(trainers).display !== 'none') {
    switchSection(trainers, seeOffer);
  } else {
    seeOffer.style.display = 'flex';
  }
}

document
  .querySelector('.fa-chevron-right')
  .addEventListener('click', toggleContent);
document
  .getElementById('fa-chevron-right')
  .addEventListener('click', toggleContent);
document
  .getElementById('fa-chevron-right-offer')
  .addEventListener('click', toggleContent);
document.querySelector('.coaches').addEventListener('click', toggleContent);
document.querySelector('.offer-lg').addEventListener('click', showOffer);

// gallery
function updateGallery(direction) {
  const images = document.querySelectorAll('.images img');
  let visibleImages = Array.from(images).filter((img) =>
    img.classList.contains('visible'),
  );

  if (!visibleImages.length) {
    for (let i = 0; i < 3; i++) {
      if (images[i]) {
        images[i].classList.add('visible');
      }
    }
    return;
  }

  let firstVisibleIndex = Array.from(images).indexOf(visibleImages[0]);

  if (direction === 'right') {
    firstVisibleIndex = (firstVisibleIndex + 1) % images.length;
  } else if (direction === 'left') {
    firstVisibleIndex = (firstVisibleIndex - 1 + images.length) % images.length;
  }

  images.forEach((img) => img.classList.remove('visible'));
  for (let i = 0; i < 3; i++) {
    const index = (firstVisibleIndex + i) % images.length;
    images[index].classList.add('visible');
  }
}

document
  .querySelector('.fa-chevron-right2')
  .addEventListener('click', function () {
    updateGallery('right');
  });

document
  .querySelector('.fa-chevron-left2')
  .addEventListener('click', function () {
    updateGallery('left');
  });

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 4000);
}

let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

const swipeArea = document.querySelector('.swipe-container');
const ourMission = document.querySelector('.our-mission-background-mb');
const trainers = document.querySelector('.coaches-pane-mb');
const offer = document.querySelector('.see-offer-mb');
const sections = [ourMission, trainers, offer];
let currentIndex = 0;

function handleSwipe() {
  const deltaX = touchendX - touchstartX;
  const deltaY = touchendY - touchstartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) swipeLeft();
    else if (deltaX > 0) swipeRight();
  }
}

swipeArea.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
});

swipeArea.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  handleSwipe();
});

function swipeLeft() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateSectionVisibility();
}

function swipeRight() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateSectionVisibility();
}

function updateSectionVisibility() {
  sections.forEach((section, index) => {
    section.style.display = index === currentIndex ? 'flex' : 'none';
  });
}

document
  .querySelectorAll('.coaches-mb, #offer-btn, #about-us-btn')
  .forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.id === 'about-us-btn') {
        currentIndex = 0; // Indexul pentru .our-mission-mb
      } else if (e.target.id === 'offer-btn') {
        currentIndex = 2; // Indexul pentru .see-offer-mb
      } else if (e.target.classList.contains('coaches-mb')) {
        currentIndex = 1; // Indexul pentru .coaches-pane-mb
      }

      updateSectionVisibility();
    });
  });

updateSectionVisibility();

const menuButton = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.slide-menu p');
const slideMenu = document.querySelector('.slide-menu');

menuButton.addEventListener('click', () => {
  slideMenu.classList.add('active');
});

slideMenu.addEventListener('click', () => {
  slideMenu.classList.remove('active');
});

closeButton.addEventListener('click', () => {
  slideMenu.classList.remove('active');
});
