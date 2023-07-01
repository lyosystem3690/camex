// Importar el módulo 'http'
const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar la respuesta HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola Mundo desde Node.js!');
});

// Escuchar en el puerto 3000
server.listen(3000, 'localhost', () => {
  console.log('Servidor en ejecución en http://localhost:3000/');
});
