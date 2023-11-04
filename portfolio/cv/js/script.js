let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const arrowLeft = document.querySelectorAll('.arrow-left');
const arrowRight = document.querySelectorAll('.arrow-right');

function updatePage(index) {
  pages.forEach((page) => page.classList.remove('active'));
  pages[index].classList.add('active');
  currentPageIndex = index;
}

arrowLeft.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const newIndex = (currentPageIndex - 1 + totalPages) % totalPages;
    updatePage(newIndex);
  });
});

arrowRight.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const newIndex = (currentPageIndex + 1) % totalPages;
    updatePage(newIndex);
  });
});

updatePage(0);
