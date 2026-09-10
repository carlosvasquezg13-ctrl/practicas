import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el nombre del cliente: ", (clienteInput) => {
  rl.question("Ingrese los días de vigencia: ", (diasInput) => {
    const cliente = clienteInput.trim().toUpperCase();
    const dias = parseInt(diasInput);

    const fechaHoy = new Date();
    const fechaEmision = fechaHoy.toLocaleDateString("es-SV");

    const fechaExpiracion = new Date(fechaHoy);
    fechaExpiracion.setDate(fechaHoy.getDate() + dias);
    const fechaLimite = fechaExpiracion.toLocaleDateString("es-SV");

    console.log("\n--- COMPROBANTE DE RESERVA ---");
    console.log(`Cliente: ${cliente}`);
    console.log(`Fecha de emisión: ${fechaEmision}`);
    console.log(`Fecha límite de pago: ${fechaLimite}`);

    rl.close();
  });
});