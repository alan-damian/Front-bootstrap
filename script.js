//modal para los programas mostrados en "INICIO"

const jsInfo = document.getElementById("jsLogoInfo");

jsInfo.addEventListener("click",()=>{
    const jsInfoContent = document.getElementById("jsInfoContent");
    if(jsInfoContent.style.display === "block"){
        jsInfoContent.style.display = "none";
        }else{
            jsInfoContent.style.display = "block";
            }
})
//cerrar modal
document.getElementById("jsInfoContent").addEventListener("click", function() {
  document.getElementById("jsInfoContent").style.display = "none";
});

const htmlInfo = document.getElementById("htmlLogoInfo");

htmlInfo.addEventListener("click",()=>{
    const htmlInfoContent = document.getElementById("htmlInfoContent");
    if(htmlInfoContent.style.display === "block"){
        htmlInfoContent.style.display = "none";
        }else{
            htmlInfoContent.style.display = "block";
            }
})
//cerrar modal
document.getElementById("htmlInfoContent").addEventListener("click", function() {
  document.getElementById("htmlInfoContent").style.display = "none";
});

const reactInfo = document.getElementById("reactLogoInfo");

reactInfo.addEventListener("click",()=>{
    const reactInfoContent = document.getElementById("reactInfoContent");
    if(reactInfoContent.style.display === "block"){
        reactInfoContent.style.display = "none";
        }else{
            reactInfoContent.style.display = "block";
            }
})
//cerrar modal
document.getElementById("reactInfoContent").addEventListener("click", function() {
  document.getElementById("reactInfoContent").style.display = "none";
});

// Seleccionar el elemento del carousel
const carousel = document.getElementById('carouselExampleControls');

// Agregar evento de fin de slide
carousel.addEventListener('slid.bs.carousel', (e) => {
  const carrLogo = document.getElementById('carrLogo');
  carrLogo.innerHTML = e.relatedTarget.id;
});

// Seleccionar los elementos de los logos
const logos = document.querySelectorAll('.logo');

// Agregar evento de hover a los logos
logos.forEach((logo) => {
  logo.addEventListener('mouseover', () => {
    logo.classList.add('hover');
  });

  logo.addEventListener('mouseout', () => {
    logo.classList.remove('hover');
  });
});


// Seleccionar el elemento del título
const titulo = document.getElementById('parrafo-titulo');

// Agregar animación de texto
titulo.addEventListener('mouseover', () => {
  titulo.classList.add('animated');
  titulo.classList.add('bounce');
});

titulo.addEventListener('mouseout', () => {
  titulo.classList.remove('animated');
  titulo.classList.remove('bounce');
});


// CAMBIO DE TEMA--------

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