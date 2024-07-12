const darkThemeButton = document.querySelector('.dark-theme');
const grayThemeButton = document.querySelector('.gray-theme');
const lightThemeButton = document.querySelector('.light-theme');


const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card');
const cardTexts = document.querySelectorAll('.card-text');

let currentTheme = 'light'; // tema actual

darkThemeButton.addEventListener('click', () => {
  if (currentTheme!== 'dark') {
    cardTexts.forEach(text => {
      text.classList.remove('gray');
      text.classList.add('dark');
    });
    cards.forEach(card => {
      card.classList.remove('gray');
      card.classList.add('dark');
    });
    navbar.classList.remove('gray');
    navbar.classList.add('dark');
    currentTheme = 'dark';
  }
});

grayThemeButton.addEventListener('click', () => {
  if (currentTheme!== 'gray') {
    cardTexts.forEach(text => {
      text.classList.remove('dark');
      text.classList.add('gray');
    });
    cards.forEach(card => {
      card.classList.remove('dark');
      card.classList.add('gray');
    });
    navbar.classList.remove('dark');
    navbar.classList.add('gray');
    currentTheme = 'gray';
  }
});


lightThemeButton.addEventListener('click', () => {
  cardTexts.forEach(text => {
    text.classList.remove('dark', 'gray');
  });
  cards.forEach(card => {
    card.classList.remove('dark', 'gray');
  });
  navbar.classList.remove('dark', 'gray');
});