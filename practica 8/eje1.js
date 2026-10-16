const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularComision(montoVentas, porcentajeComision = 5) {
    return montoVentas * (porcentajeComision / 100);
}

rl.question('Ingrese el monto total de ventas: ', (inputVentas) => {
    let montoVentas = parseFloat(inputVentas);
    
    if (isNaN(montoVentas)) {
        console.log('Error: El monto ingresado no es un número válido.');
        rl.close();
        return;
    }

    rl.question('Ingrese el porcentaje de comisión (ENTER para usar el 5%): ', (inputPorcentaje) => {
        let porcentajeComision;

        if (inputPorcentaje.trim() === '') {
            porcentajeComision = undefined;
        } else {
            porcentajeComision = parseFloat(inputPorcentaje);
            if (isNaN(porcentajeComision)) {
                console.log('Error: El porcentaje ingresado no es válido.');
                rl.close();
                return;
            }
        }

        let comision = calcularComision(montoVentas, porcentajeComision);
        console.log(`La comisión calculada es: $${comision.toFixed(2)}`);
        
        rl.close();
    });
});