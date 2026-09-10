import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el peso del paquete en kg: ", (pesoInput) => {
  rl.question("Ingrese la tarifa por kilogramo ($): ", (tarifaInput) => {
    const peso = parseFloat(pesoInput);
    const tarifa = parseFloat(tarifaInput);

    const costoBase = peso * tarifa;

    const redondeoTradicional = Math.round(costoBase);
    const costoAbajo = Math.floor(costoBase);
    const costoArriba = Math.ceil(costoBase);

    console.log("\n--- RESUMEN DE COTIZACIÓN ---");
    console.log(`Costo Base: $${costoBase.toFixed(2)}`);
    console.log(`Redondeo Tradicional: $${redondeoTradicional.toFixed(2)}`);
    console.log(`Costo Mínimo (Hacia abajo): $${costoAbajo.toFixed(2)}`);
    console.log(`Costo Máximo (Hacia arriba): $${costoArriba.toFixed(2)}`);

    rl.close();
  });
});