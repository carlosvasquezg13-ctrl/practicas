import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese su nombre completo: ", (nombre) => {
  rl.question("Ingrese su año de nacimiento: ", (anio) => {
    const nombreLimpio = nombre.trim();
    const nombreMayusculas = nombreLimpio.toUpperCase();
    const primerNombre = nombreMayusculas.split(" ")[0];

    const codigoUsuario = `${primerNombre.slice(0, 3)}${anio.trim().slice(-2)}-ESTUDIANTE`;

    console.log("\n--- RESULTADOS ---");
    console.log(`Nombre formateado: ${nombreMayusculas}`);
    console.log(`Total de caracteres: ${nombreLimpio.length}`);
    console.log(`Código de Usuario: ${codigoUsuario}`);

    rl.close();
  });
});