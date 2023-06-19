window.onload = function() {
  var carrusel = document.querySelector('.carrusel');
  var botonAnterior = document.getElementById('Botonant');
  var botonSiguiente = document.getElementById('Botonsig');
  var currentIndex = 0;

  botonSiguiente.onclick = function() {
    if (currentIndex < carrusel.children.length - 1) {
      currentIndex++;
      actualizarCarrusel();
    }
  };

  botonAnterior.onclick = function() {
    if (currentIndex > 0) {
      currentIndex--;
      actualizarCarrusel();
    }
  };

  function actualizarCarrusel() {
    var slideWidth = carrusel.children[currentIndex].offsetWidth;
    carrusel.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
  }
};
