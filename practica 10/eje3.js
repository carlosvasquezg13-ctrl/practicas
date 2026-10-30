import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalProductos = 0;
let contadorProductos = 1;
let acumuladorPrecios = 0;

function registrarProductos() {
    if (contadorProductos > totalProductos) {
        const subtotal = acumuladorPrecios;
        const iva = subtotal * 0.13;
        const totalPagar = subtotal + iva;

        console.log("\n--- Resumen Final de la Compra ---");
        console.log(`Subtotal: $${subtotal.toFixed(2)}`);
        console.log(`IVA (13%): $${iva.toFixed(2)}`);
        console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
        
        rl.close();
        return;
    }

    rl.question(`Ingrese el precio del producto ${contadorProductos}: `, function(dato) {
        const precio = parseFloat(dato);

        if (!Number.isNaN(precio) && precio >= 0) {
            acumuladorPrecios += precio;
            contadorProductos++;
        } else {
            console.log("Precio inválido. Ingrese un número mayor o igual a 0.");
        }

        registrarProductos();
    });
}

rl.question("¿Cuántos productos se van a registrar?: ", function(dato) {
    const cantidad = parseInt(dato);

    if (!Number.isNaN(cantidad) && cantidad > 0) {
        totalProductos = cantidad;
        registrarProductos();
    } else {
        console.log("Cantidad inválida. Debe ser mayor a 0.");
        rl.close();
    }
});