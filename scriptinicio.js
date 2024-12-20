window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Carrusel de Cards
let currentSlide = 0;
const slides = document.querySelectorAll('.slidecone');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Mostrar solo 5 cards a la vez
function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  }
  const offset = -(currentSlide * 100);
  document.querySelector('.cards-container').style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

showSlide(currentSlide); // Inicializa el carrusel

// Cambio de color del header
const colors = ["#FFB3B3", "#B3FFB3", "#B3D9FF", "#F2F27D", "#D8A7FF", "#FFB3B3"];
let currentColorIndex = 0;

function changeHeaderColor() {
  document.querySelector('header').style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeHeaderColor, 3000); // Cambia cada 3 segundos

// Cambiar de imagen con los radios
document.querySelectorAll('input[type="radio"]').forEach((input, index) => {
    input.addEventListener('change', () => {
        const slides = document.querySelectorAll('.slide');
        const slideContainer = document.querySelector('.slides');
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
    });
});
