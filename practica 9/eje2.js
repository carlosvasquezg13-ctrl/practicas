import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function enviarNotificacionEmail(destinatario, mensaje) {
  console.log(`[EMAIL A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

function enviarNotificacionSMS(destinatario, mensaje) {
  console.log(`[SMS A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

function procesarAlerta(usuario, tipoAlerta, callbackElegido) {
  let mensaje = '';

  if (tipoAlerta === '1') {
    mensaje = 'Alerta de seguridad';
  } else {
    mensaje = 'Bienvenida al sistema';
  }

  callbackElegido(usuario, mensaje);
}

rl.question('Nombre del destinatario: ', (usuario) => {
  console.log('Selecciona el tipo de alerta:');
  console.log('1. Alerta de seguridad');
  console.log('2. Bienvenida al sistema');
  
  rl.question('Opción (1 o 2): ', (opcionAlerta) => {
    console.log('Selecciona el medio de envío:');
    console.log('1. Correo electrónico');
    console.log('2. SMS');
    
    rl.question('Opción (1 o 2): ', (opcionMedio) => {
      const callback = opcionMedio === '1' ? enviarNotificacionEmail : enviarNotificacionSMS;
      
      procesarAlerta(usuario, opcionAlerta, callback);
      rl.close();
    });
  });
});