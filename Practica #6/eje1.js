const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertirUSDToEUR(dolares) {
  return dolares * 0.92;
}

function convertirUSDToJPY(dolares) {
  return dolares * 155.50;
}

function mostrarTicketDivisas(dolares, euros, yenes) {
  console.log('\n--- Resumen de Conversión ---');
  console.log(`Monto ingresado : $${dolares.toFixed(2)} USD`);
  console.log(`Equivalente     : €${euros.toFixed(2)} EUR`);
  console.log(`Equivalente     : ¥${yenes.toFixed(2)} JPY`);
  console.log('-----------------------------\n');
}

rl.question('¿Qué cantidad en dólares (USD) deseas convertir? ', function(montoTexto) {
  let dolares = parseFloat(montoTexto);

  let euros = convertirUSDToEUR(dolares);
  let yenes = convertirUSDToJPY(dolares);

  mostrarTicketDivisas(dolares, euros, yenes);

  rl.close();
});