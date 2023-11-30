document.getElementById('llamarAmbulancia').addEventListener('click', function() {
    llamarAmbulancia();
});

function llamarAmbulancia() {
    // Cambia el número de teléfono según el número de la ambulancia de tu área.
    var numeroAmbulancia = '131';

    // Llama al número de la ambulancia
    window.location.href = 'tel:' + numeroAmbulancia;
}
