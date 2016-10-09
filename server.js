'use strict';

let app = require('express')();
let server = require('http').createServer(app);

server.listen(3000, function () {
  console.log('Listenint on 3000');
});

let io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('client connected');

  socket.on('client-emit', (message) => {
    console.log(message);
    socket.emit('server-emit', message);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
