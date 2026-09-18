import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuantas notas va a ingresar?: ", (totalNotas) => {
  totalNotas = parseInt(totalNotas);

  if (isNaN(totalNotas) || totalNotas <= 0) {
    console.log("Error: Ingrese una cantidad valida de notas.");
    rl.close();
  } else {
    let suma = 0;
    let contador = 1;

    const pedirNota = () => {
      if (contador <= totalNotas) {
        rl.question(`Ingrese la nota ${contador}: `, (nota) => {
          nota = parseFloat(nota);

          if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Nota invalida. Intente de nuevo.");
            pedirNota();
          } else {
            suma += nota;
            contador++;
            pedirNota();
          }
        });
      } else {
        let promedio = suma / totalNotas;
        console.log(`Suma total de notas: ${suma.toFixed(2)}`);
        console.log(`Promedio final: ${promedio.toFixed(2)}`);
        rl.close();
      }
    };

    pedirNota();
  }
});