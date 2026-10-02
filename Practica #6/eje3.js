const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularCostoBase(pesoKg, distanciaKm) {
  return (pesoKg * 2.50) + (distanciaKm * 0.15);
}

function calcularSeguroEnvio(costoBase) {
  return costoBase * 0.05;
}

function calcularTotalEnvio(costoBase, seguro) {
  return costoBase + seguro;
}

function mostrarGuiaEnvio(peso, distancia, base, seguro, total) {
  console.log('\n--- Guía de Envío ---');
  console.log(`Peso del paquete   : ${peso.toFixed(2)} kg`);
  console.log(`Distancia de entrega: ${distancia.toFixed(2)} km`);
  console.log('---------------------');
  console.log(`Tarifa base        : $${base.toFixed(2)}`);
  console.log(`Seguro de paquete  : $${seguro.toFixed(2)}`);
  console.log('---------------------');
  console.log(`Total del envío    : $${total.toFixed(2)}`);
  console.log('---------------------\n');
}

rl.question('¿Cuánto pesa el paquete en kilos? ', function(pesoTexto) {
  rl.question('¿A cuántos kilómetros está el destino? ', function(distanciaTexto) {
    
    let pesoKg = parseFloat(pesoTexto);
    let distanciaKm = parseFloat(distanciaTexto);

    let base = calcularCostoBase(pesoKg, distanciaKm);
    let seguro = calcularSeguroEnvio(base);
    let total = calcularTotalEnvio(base, seguro);

    mostrarGuiaEnvio(pesoKg, distanciaKm, base, seguro, total);

    rl.close();
  });
});