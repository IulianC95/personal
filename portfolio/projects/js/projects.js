document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.getElementById('closeMenu');
  const body = document.querySelector('body');
  const menuLinks = mobileMenu.querySelectorAll('a');
  const projects = document.querySelectorAll('.project-lg');
  const progLang = document.querySelector('.program-lang');

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

  projects.forEach((project) => {
    project.addEventListener('mouseover', function () {
      this.querySelector('.program-lang').style.display = 'flex';
    });

    project.addEventListener('mouseout', function () {
      this.querySelector('.program-lang').style.display = 'none';
    });
  });
});
