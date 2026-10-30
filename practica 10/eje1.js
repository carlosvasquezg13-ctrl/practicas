import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cuentaRegresiva(numero) {
    if (numero === 1) {
        console.log(numero);
        console.log("¡El tiempo ha terminado!");
        rl.close();
        return;
    }

    console.log(numero);
    cuentaRegresiva(numero - 1);
}

rl.question("Ingrese un número entero positivo para la cuenta regresiva: ", function(dato) {
    const numeroIngresado = parseInt(dato);

    if (!Number.isNaN(numeroIngresado) && Number.isInteger(numeroIngresado) && numeroIngresado > 0) {
        cuentaRegresiva(numeroIngresado);
    } else {
        console.log("Error: Debe ingresar un número entero positivo mayor a cero.");
        rl.close();
    }
});