import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese un numero entero positivo: ", (limite) => {
  limite = parseInt(limite);

  if (isNaN(limite) || limite < 2) {
    console.log("Error: Debe ingresar un numero entero mayor o igual a 2.");
  } else {
    let par = 2;
    while (par <= limite) {
      console.log(`Numero par: ${par}`);
      par += 2;
    }
  }

  rl.close();
});