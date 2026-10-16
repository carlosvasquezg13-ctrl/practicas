const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCostoTotal(tarifaSeguro = 15, ...pesosPaquetes) {
    let sumaKilos = 0;
    
    for (let peso of pesosPaquetes) {
        sumaKilos += peso;
    }

    return (sumaKilos * 3.50) + tarifaSeguro;
}

function imprimirCotizacion(cliente, totalCobro) {
    console.log('\n--- RESUMEN DE COTIZACIÓN ---');
    console.log(`Cliente: ${cliente}`);
    console.log(`Total a pagar: $${totalCobro.toFixed(2)}`);
    console.log('-----------------------------');
}

rl.question('Nombre del cliente: ', (cliente) => {
    rl.question('Costo del seguro (ENTER para tarifa estándar de $15.00): ', (inputSeguro) => {
        let tarifaSeguro;

        if (inputSeguro.trim() === '') {
            tarifaSeguro = undefined;
        } else {
            tarifaSeguro = parseFloat(inputSeguro);
            if (isNaN(tarifaSeguro)) {
                console.log('El valor ingresado para el seguro no es válido.');
                rl.close();
                return;
            }
        }

        rl.question('Peso del primer paquete (kg): ', (p1) => {
            let peso1 = parseFloat(p1);
            if (isNaN(peso1)) {
                console.log('El peso ingresado no es válido.');
                rl.close();
                return;
            }

            rl.question('Peso del segundo paquete (kg): ', (p2) => {
                let peso2 = parseFloat(p2);
                if (isNaN(peso2)) {
                    console.log('El peso ingresado no es válido.');
                    rl.close();
                    return;
                }

                rl.question('Peso del tercer paquete (kg): ', (p3) => {
                    let peso3 = parseFloat(p3);
                    if (isNaN(peso3)) {
                        console.log('El peso ingresado no es válido.');
                        rl.close();
                        return;
                    }

                    let total = calcularCostoTotal(tarifaSeguro, peso1, peso2, peso3);
                    imprimirCotizacion(cliente, total);

                    rl.close();
                });
            });
        });
    });
});