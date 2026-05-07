const WebSocket = require("ws");
const WebSocketServer = WebSocket.WebSocketServer;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (msg) => {
    console.log("Client:", msg.toString());
    socket.send("Server received: " + msg);
  });

  socket.send("Hello from server!");
});
