// script.js

function calcularIMC(peso, altura) {
    altura = altura / 100; // Convertir altura a metros
    return (peso / (altura * altura)).toFixed(2); // Fórmula del IMC
}

function agregarRegistro() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var fecha = document.getElementById('fecha').value;

    if (!isNaN(peso) && !isNaN(altura) && fecha) {
        var imc = calcularIMC(peso, altura);

        var nuevoRegistro = document.createElement('tr');
        nuevoRegistro.innerHTML = `
            <td>${fecha}</td>
            <td>${peso}</td>
            <td>${altura}</td>
            <td>${imc}</td>
        `;

        document.getElementById('historialRegistros').appendChild(nuevoRegistro);

        // Limpiar el formulario después de agregar el registro
        document.getElementById('formRegistro').reset();
    } else {
        alert('Por favor, complete todos los campos con valores numéricos válidos.');
    }
}
