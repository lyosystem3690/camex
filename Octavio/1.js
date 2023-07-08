const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Evento que se dispara cuando se establece una conexión WebSocket
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Evento que se dispara cuando se recibe un mensaje del cliente
  socket.on('message', (message) => {
    console.log('Mensaje recibido: ' + message);

    // Enviar un mensaje de respuesta al cliente
    socket.emit('message', 'Respuesta 11: ' + message);
  });

  // Evento que se dispara cuando se cierra la conexión
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado 2211');
  });
});

// Iniciar el servidor
const port = 3033;
server.listen(port, () => {
  console.log('Servidor en ejecución en el puerto ' + port);
});
