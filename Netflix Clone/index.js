const cardLists = document.querySelectorAll('.card-list');
const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');

const scrollDistance = 300;

prevButtons.forEach((prevButton, index) => {
  prevButton.addEventListener('click', () => {
    cardLists[index].scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
  });
});

nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener('click', () => {
    cardLists[index].scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  });
});
