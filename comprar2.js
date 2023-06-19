document.getElementById('comprar2').addEventListener('click', function() {
    const cantidad = parseInt(document.getElementById('cantidad2').value);
    const precioTotal = cantidad * 19.99;
  
    Swal.fire({
      icon: 'success',
      title: 'Venta realizada',
      text: 'El precio total es: €' + precioTotal.toFixed(2)
    });
  });
  