import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
  rl.question("Ingrese la nota obtenida (0 a 10): ", (notaInput) => {
    const nota = parseFloat(notaInput);

    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Error: Debe ingresar una nota válida entre 0 y 10.");
    } else {
      let desempenio = "";

      if (nota >= 9.0) {
        desempenio = "Desempeño Excelente (Aprobado)";
      } else if (nota >= 6.0) {
        desempenio = "Desempeño Satisfactorio (Aprobado)";
      } else {
        desempenio = "Reprobado — Requiere refuerzo";
      }

      console.log("\n--- REPORTE DE EXAMEN ---");
      console.log(`Estudiante: ${nombre.trim()}`);
      console.log(`Nota Obtenida: ${nota.toFixed(1)}`);
      console.log(`Clasificación: ${desempenio}`);
    }

    rl.close();
  });
});