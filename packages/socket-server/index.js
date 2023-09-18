import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8001 });
console.log('Socket server listening on port 8001');

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log(`Received: ${data}`);
    console.log(`Broadcasting to ${wss.clients.size} clients\n`);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: false });
      }
    });
  });

  ws.on('close', function close() {
    ws.send('Bye, client.');
  });

  ws.send('Hi, client.');
});
