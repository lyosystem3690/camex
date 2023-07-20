// Importar el módulo readline para leer datos de la consola
const readline = require('readline');

// Crear una interfaz para leer datos de la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que realiza la operación con los datos ingresados por el usuario
function realizarOperacion(num1, num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const producto = num1 * num2;
  const division = num1 / num2;

  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Producto: ${producto}`);
  console.log(`División: ${division}`);
}

// Preguntar al usuario por dos números
rl.question('Ingresa el primer número: ', (numero1) => {
  rl.question('Ingresa el segundo número: ', (numero2) => {
    // Convertir los datos ingresados por el usuario a números
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    // Verificar si los datos ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, ingresa números válidos.');
    } else {
      // Realizar la operación con los números ingresados
      realizarOperacion(num1, num2);
    }

    // Cerrar la interfaz de lectura y terminar el programa
    rl.close();
  });
});
