var cp = require("child_process");
var net = require("net");
var server = net.createServer();
var child = cp.fork("chil");
server.on("connection", function(socket) {
socket.end("Handled by parent process");
});
server.listen(8000, function() {
child.send("server", server);
});