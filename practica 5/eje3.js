import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nombre del vendedor que atiende: ", (vendedor) => {
  rl.question("¿Qué producto se está vendiendo? ", (producto) => {
    rl.question("¿Cuál es el precio base del producto? $", (inputPrecio) => {
      
      const precioBase = parseFloat(inputPrecio);

      if (isNaN(precioBase) || precioBase <= 0) {
        console.log("\nEl precio ingresado no es válido. Asegúrate de colocar un número positivo.");
        rl.close();
        return;
      }

      console.log("\nCategorías disponibles:");
      console.log("A - Línea Blanca (10% de descuento)");
      console.log("B - Electrónica (5% de descuento)");
      console.log("C - Mueblería (15% de descuento)");
      console.log("D - Accesorios/Varios (Sin descuento)");

      rl.question("Ingresa la letra de la categoría: ", (inputCat) => {
        const categoria = inputCat.trim().toUpperCase();
        let descuentoPct = 0;
        let nombreCategoria = "";

        switch (categoria) {
          case "A":
            descuentoPct = 0.10;
            nombreCategoria = "Línea Blanca";
            break;
          case "B":
            descuentoPct = 0.05;
            nombreCategoria = "Electrónica";
            break;
          case "C":
            descuentoPct = 0.15;
            nombreCategoria = "Mueblería";
            break;
          case "D":
            descuentoPct = 0.0;
            nombreCategoria = "Accesorios/Varios";
            break;
          default:
            console.log("\nEsa categoría no existe. Por favor reinicia e intenta de nuevo.");
            rl.close();
            return;
        }

        rl.question("¿Desea agregar garantía extendida por $25.00 adicionales? (S/N): ", (inputGarantia) => {
          const deseaGarantia = inputGarantia.trim().toUpperCase();
          let costoGarantia = 0;

          if (deseaGarantia === "S") {
            costoGarantia = 25.00;
          }

          const montoDescuento = precioBase * descuentoPct;
          const subtotalConDescuento = (precioBase - montoDescuento) + costoGarantia;
          const iva = subtotalConDescuento * 0.13;
          const totalGeneral = subtotalConDescuento + iva;
          const totalRedondeadoComercial = Math.round(totalGeneral);

          const fechaEmision = new Date().toLocaleDateString();
          const horaEmision = new Date().toLocaleTimeString();

          console.log("\n========================================");
          console.log("         TICKET DE VENTA FISCAL         ");
          console.log("========================================");
          console.log(`Fecha: ${fechaEmision} | Hora: ${horaEmision}`);
          console.log(`Vendedor: ${vendedor.trim()}`);
          console.log(`Artículo: ${producto.trim()} (${nombreCategoria})`);
          console.log("----------------------------------------");
          console.log(`Precio Base:           $${precioBase.toFixed(2)}`);
          console.log(`Descuento:            -$${montoDescuento.toFixed(2)}`);
          console.log(`Garantía Extendida:    $${costoGarantia.toFixed(2)}`);
          console.log(`Subtotal:              $${subtotalConDescuento.toFixed(2)}`);
          console.log(`IVA (13%):             $${iva.toFixed(2)}`);
          console.log("----------------------------------------");
          console.log(`TOTAL EXACTO:          $${totalGeneral.toFixed(2)}`);
          console.log(`TOTAL A PAGAR (Redondo): $${totalRedondeadoComercial.toFixed(2)}`);
          console.log("========================================");
          console.log("        ¡GRACIAS POR SU PREFERENCIA!    ");
          console.log("========================================\n");

          rl.close();
        });
      });
    });
  });
});