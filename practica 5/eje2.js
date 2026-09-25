import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¡Bienvenido! Por favor, dime el nombre del huésped: ", (huesped) => {
  rl.question("¿Cuántas noches se va a hospedar? ", (inputNoches) => {
    rl.question("¿Cuál es la tarifa base por noche? $", (inputTarifa) => {
      
      const noches = parseInt(inputNoches);
      const tarifaBase = parseFloat(inputTarifa);

      if (isNaN(noches) || noches <= 0 || isNaN(tarifaBase) || tarifaBase <= 0) {
        console.log("\nHouston, tenemos un problema: las noches y la tarifa deben ser números mayores a cero.");
        rl.close();
        return;
      }

      console.log("\nElige la temporada de reserva:");
      console.log("1. Temporada Baja (Sin recargo)");
      console.log("2. Temporada Media (15% de recargo)");
      console.log("3. Temporada Alta (35% de recargo)");

      rl.question("Ingresa tu opción de temporada: ", (opcionTemp) => {
        let recargo = 0;
        let temporadaStr = "";

        switch (opcionTemp.trim()) {
          case "1":
            recargo = 0.0;
            temporadaStr = "Baja";
            break;
          case "2":
            recargo = 0.15;
            temporadaStr = "Media";
            break;
          case "3":
            recargo = 0.35;
            temporadaStr = "Alta";
            break;
          default:
            console.log("\nVaya, esa opción de temporada no es válida.");
            rl.close();
            return;
        }

        const tarifaAjustada = tarifaBase * (1 + recargo);
        let subtotalHospedaje = tarifaAjustada * noches;

        let descuentoAplicado = 0;
        if (noches >= 5) {
          descuentoAplicado = subtotalHospedaje * 0.10;
          subtotalHospedaje -= descuentoAplicado;
          console.log("\n¡Buenas noticias! Aplica un 10% de descuento por estadía larga.");
        }

        const impuestoTurismo = subtotalHospedaje * 0.05;
        const totalFinal = subtotalHospedaje + impuestoTurismo;
        const totalTecho = Math.ceil(totalFinal);

        const fechaCheckIn = new Date();
        const fechaCheckOut = new Date();
        fechaCheckOut.setDate(fechaCheckIn.getDate() + noches);

        console.log("\n========================================");
        console.log("      LIQUIDACIÓN DE HOSPEDAJE HOTEL    ");
        console.log("========================================");
        console.log(`Huésped: ${huesped.trim()}`);
        console.log(`Temporada seleccionada: ${temporadaStr}`);
        console.log(`Total de noches: ${noches}`);
        console.log(`Check-in: ${fechaCheckIn.toLocaleDateString()}`);
        console.log(`Check-out: ${fechaCheckOut.toLocaleDateString()}`);
        console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)}`);
        console.log(`Impuesto de turismo (5%): $${impuestoTurismo.toFixed(2)}`);
        console.log(`Total exacto: $${totalFinal.toFixed(2)}`);
        console.log(`Total a cobrar (redondeado hacia arriba): $${totalTecho.toFixed(2)}`);
        console.log("========================================\n");

        rl.close();
      });
    });
  });
});