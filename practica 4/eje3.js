import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el numero de filas: ", (filas) => {
  filas = parseInt(filas);

  rl.question("Ingrese el numero de columnas: ", (columnas) => {
    columnas = parseInt(columnas);

    if (isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0) {
      console.log("Error: Las filas y columnas deben ser numeros mayores a 0.");
    } else {
      console.log("\nCuadrícula de coordenadas:");
      for (let f = 1; f <= filas; f++) {
        let filaTexto = "";
        for (let c = 1; c <= columnas; c++) {
          filaTexto += `[${f}, ${c}] `;
        }
        console.log(filaTexto);
      }
    }

    rl.close();
  });
});