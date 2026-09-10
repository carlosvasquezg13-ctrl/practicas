import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Monto de la compra ($): ", (montoInput) => {
  rl.question("Tipo de envío (1: Normal $5 / 2: Express $10): ", (envioInput) => {
    rl.question("¿Tiene Membresía Premium? (S/N): ", (membresiaInput) => {
      const subtotal = parseFloat(montoInput);
      const tipoEnvio = parseInt(envioInput);
      const esPremium = membresiaInput.trim().toUpperCase();

      if (isNaN(subtotal) || subtotal <= 0) {
        console.log("Error: El monto de la compra debe ser un número válido.");
      } else if (tipoEnvio !== 1 && tipoEnvio !== 2) {
        console.log("Error: El tipo de envío debe ser 1 o 2.");
      } else {
        let costoEnvio = 0;

        if (subtotal >= 100 || esPremium === "S") {
          costoEnvio = 0.0;
        } else {
          if (tipoEnvio === 1) {
            costoEnvio = 5.0;
          } else {
            costoEnvio = 10.0;
          }
        }

        let descuento = 0;
        if (subtotal > 150) {
          descuento = subtotal * 0.1;
        }

        const totalFinal = subtotal - descuento + costoEnvio;

        console.log("\n--- DESGLOSE DE COMPRA ---");
        console.log(`Subtotal productos: $${subtotal.toFixed(2)}`);
        console.log(`Descuento aplicado (10%): $${descuento.toFixed(2)}`);
        console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
        console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
      }

      rl.close();
    });
  });
});