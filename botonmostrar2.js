const mostrarEspecificaciones2 = document.getElementById('mostrarEspecificaciones2');
const especificaciones2 = document.getElementById('especificaciones2');

mostrarEspecificaciones2.onclick = function() {
  if (especificaciones2.style.display === 'none') {
    especificaciones2.style.display = 'block';
    especificaciones2.style.marginLeft = '200px';
  } else {
    especificaciones2.style.display = 'none';
    especificaciones2.style.marginLeft = '0px';
  }
};
