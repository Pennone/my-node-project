console.log("script loaded");

let express = require("express");

let app = express();

let port = 3000;

let server = app.listen(port);

app.use(express.static("public"));

console.log("running server on http://localhost:" + port);

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);
}