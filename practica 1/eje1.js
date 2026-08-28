const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese la nota del Parcial 1: ', (e1) => {
        let n1 = parseFloat(e1);

        rl.question('Ingrese la nota del Parcial 2: ', (e2) => {
            let n2 = parseFloat(e2);

            rl.question('Ingrese la nota del Parcial 3: ', (e3) => {
                let n3 = parseFloat(e3);

                let notaFinal = (n1 * 0.30) + (n2 * 0.30) + (n3 * 0.40);

                console.log('Estudiante: ' + nombre);
                console.log('Nota final: ' + notaFinal.toFixed(2));

                rl.close();
            });
        });
    });
});