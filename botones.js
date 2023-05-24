const catalogocontenido = document.querySelector('.catalogo-contenido');
const carrusel = document.querySelector('.carrusel');
const Botonant = document.getElementById('Botonant');
const Botonsig = document.getElementById('Botonsig');
const slideWidth = catalogocontenido.clientWidth;
let translateValue = 0;
let currentIndex = 0;

Botonsig.addEventListener('click', () => {
  if (currentIndex < carrusel.childElementCount - 1) {
    currentIndex++;
    translateValue -= slideWidth;
    carrusel.style.transform = `translateX(${translateValue}px)`;
  }
});

Botonant.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    translateValue += slideWidth;
    carrusel.style.transform = `translateX(${translateValue}px)`;
  }
});
