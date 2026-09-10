import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese las horas estacionadas: ", (horasInput) => {
  const horas = parseInt(horasInput);

  if (isNaN(horas) || horas <= 0) {
    console.log("Error: Ingrese un número de horas válido mayor a 0.");
  } else {
    let totalPagar = 0;

    if (horas === 1) {
      totalPagar = 2.0;
    } else if (horas >= 2 && horas <= 4) {
      totalPagar = horas * 1.5;
    } else {
      totalPagar = horas * 1.0;
    }

    console.log("\n--- TICKET DE ESTACIONAMIENTO ---");
    console.log(`Horas cobradas: ${horas}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
  }

  rl.close();
});