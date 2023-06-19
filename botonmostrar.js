const mostrarEspecificaciones1 = document.getElementById('mostrarEspecificaciones1');
const especificaciones1 = document.getElementById('especificaciones1');

mostrarEspecificaciones1.onclick = function() {
  if (especificaciones1.style.display === 'none') {
    especificaciones1.style.display = 'block';
    especificaciones1.style.marginLeft = '200px';
  } else {
    especificaciones1.style.display = 'none';
    especificaciones1.style.marginLeft = '0px';
  }
};
