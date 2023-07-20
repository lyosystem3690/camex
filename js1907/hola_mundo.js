// Importar el módulo 'http'
const http = require('http');

// Configurar el servidor HTTP para responder con "Hola Mundo" en todas las solicitudes
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola Mundo!\n');
});

// Escuchar en el puerto 3000 (puedes cambiarlo a cualquier puerto disponible)
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}/`);
});
