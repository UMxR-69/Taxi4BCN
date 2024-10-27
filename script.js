document.getElementById('taxi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Recoger datos del formulario
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    // Aquí puedes añadir la lógica para enviar los datos a tu servidor o procesarlos
    alert(`Reserva realizada: ${nombre} - ${telefono}`);
});
