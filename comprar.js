document.getElementById('comprar').addEventListener('click', function() {
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const precioTotal = cantidad * 25.99;

  Swal.fire({
    icon: 'success',
    title: 'Venta realizada',
    text: 'El precio total es: €' + precioTotal.toFixed(2)
  });
});
