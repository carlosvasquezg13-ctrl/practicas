import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Hola, ¿cuál es el nombre completo del cliente? ", (nombreCliente) => {
  rl.question("¿Qué marca y modelo de vehículo desea cotizar? ", (vehiculo) => {
    rl.question("¿Cuál es el monto base estimado del auto? $", (inputPrecio) => {
      
      const precioBase = parseFloat(inputPrecio);

      if (isNaN(precioBase) || precioBase <= 0) {
        console.log("\nUy, parece que el precio ingresado no es válido. Debe ser mayor a $0.00.");
        rl.close();
        return;
      }

      console.log("\nSelecciona el tipo de vehículo:");
      console.log("1. Sedán (5% de prima)");
      console.log("2. SUV (8% de prima)");
      console.log("3. Pick-up / Camioneta (12% de prima)");
      
      rl.question("Ingresa el número de tu opción: ", (opcion) => {
        let porcentajePrima = 0;
        let tipoVehiculoStr = "";

        switch (opcion.trim()) {
          case "1":
            porcentajePrima = 0.05;
            tipoVehiculoStr = "Sedán";
            break;
          case "2":
            porcentajePrima = 0.08;
            tipoVehiculoStr = "SUV";
            break;
          case "3":
            porcentajePrima = 0.12;
            tipoVehiculoStr = "Pick-up / Camioneta";
            break;
          default:
            console.log("\nUps, esa opción de menú no existe. Intenta de nuevo.");
            rl.close();
            return;
        }

        const primaAnual = precioBase * porcentajePrima;
        const fechaActual = new Date().toLocaleString();

        console.log("\n========================================");
        console.log("       REPORTE DE COTIZACIÓN DE SEGURO  ");
        console.log("========================================");
        console.log(`Fecha de emisión: ${fechaActual}`);
        console.log(`Cliente: ${nombreCliente.trim()}`);
        console.log(`Vehículo: ${vehiculo.trim()} (${tipoVehiculoStr})`);
        console.log(`Precio Base: $${precioBase.toFixed(2)}`);
        console.log(`Prima Anual Calculada: $${primaAnual.toFixed(2)}`);
        console.log("========================================\n");

        rl.close();
      });
    });
  });
});