import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tieneLongitudValida = (password) => password.length >= 8;

function registrarUsuario(usuario, password) {
  return tieneLongitudValida(password)
    ? `Registro exitoso para ${usuario}`
    : 'Error: La contraseña es demasiado corta';
}

rl.question('Ingresa tu usuario: ', (usuario) => {
  rl.question('Ingresa tu contraseña: ', (password) => {
    const resultado = registrarUsuario(usuario, password);
    console.log(resultado);
    rl.close();
  });
});