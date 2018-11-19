const net = require('net');

const server = net.createServer();
server.on('listening', () => {
  console.log("listening......");
});

server.on('connection', (socket) => {
  console.log('connecting...');
  socket.on('end', () => {
    console.log('Client socket close...');
    setTimeout(() => {
      server.close();
    }, 5000);
  });

  socket.on('data', (data) => {
    console.log('data: ' + data);
    socket.write("mmmm");
  });
});

server.on('close', () => {
  console.log('server closed...');
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(4000);
