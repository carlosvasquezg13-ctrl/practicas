import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarAcumulado(numero) {
    if (numero === 1) {
        return 1;
    }
    
    return numero + sumarAcumulado(numero - 1);
}

rl.question("Ingrese un número entero positivo N: ", function(dato) {
    const N = parseInt(dato);

    if (!Number.isNaN(N) && Number.isInteger(N) && N > 0) {
        const resultadoTotal = sumarAcumulado(N);
        console.log(`La suma acumulada desde 1 hasta ${N} es: ${resultadoTotal}`);
    } else {
        console.log("Por favor, ingrese un número entero positivo válido.");
    }
    
    rl.close();
});