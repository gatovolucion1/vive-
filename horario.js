document.addEventListener('DOMContentLoaded', function () {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const hours = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

    const scheduleTable = document.getElementById('schedule');

    // Crear encabezados de columna
    const headerRow = scheduleTable.insertRow(0);
    headerRow.insertCell(0); // Celda vacía para la esquina superior izquierda

    for (let hour of hours) {
        const th = document.createElement('th');
        th.textContent = hour;
        headerRow.appendChild(th);
    }

    // Crear filas y celdas para los días y horas
    for (let i = 0; i < days.length; i++) {
        const row = scheduleTable.insertRow(i + 1);

        // Celda de día
        const dayCell = row.insertCell(0);
        dayCell.textContent = days[i];

        // Celdas para horas con id "dia-hora"
        for (let j = 0; j < hours.length; j++) {
            const cell = row.insertCell(j + 1);
            cell.setAttribute('id', `${days[i].toLowerCase()}-${hours[j].replace(':', '')}`);
            cell.addEventListener('click', () => addMedication(days[i], hours[j]));
        }
    }

    // Función para agregar medicamento al hacer clic en la celda
    function addMedication(day, hour) {
        const medication = prompt(`Ingrese el medicamento para ${day} a las ${hour}:`);
        if (medication !== null) {
            const cellId = `${day.toLowerCase()}-${hour.replace(':', '')}`;
            const cell = document.getElementById(cellId);
            cell.textContent = medication;
        }
    }
});
