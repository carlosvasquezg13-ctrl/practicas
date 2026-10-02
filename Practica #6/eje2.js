const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularCostoConsumo(kwh) {
  return kwh * 0.18;
}

function calcularTasaServicios(subtotal) {
  return subtotal * 0.08;
}

function calcularTotalFactura(subtotal, tasa) {
  return subtotal + tasa;
}

function imprimirFacturaLuz(kwh, subtotal, tasa, total) {
  console.log('\n--- Detalle del Consumo Eléctrico ---');
  console.log(`Energía consumida : ${kwh.toFixed(2)} kWh`);
  console.log(`Cobro por consumo : $${subtotal.toFixed(2)}`);
  console.log(`Tasa municipal (8%): $${tasa.toFixed(2)}`);
  console.log('------------------------------------');
  console.log(`Monto total a pagar: $${total.toFixed(2)}`);
  console.log('------------------------------------\n');
}

rl.question('¿Cuántos kWh consumiste este mes? ', function(kwhTexto) {
  let kwh = parseFloat(kwhTexto);

  let subtotal = calcularCostoConsumo(kwh);
  let tasa = calcularTasaServicios(subtotal);
  let total = calcularTotalFactura(subtotal, tasa);

  imprimirFacturaLuz(kwh, subtotal, tasa, total);

  rl.close();
});