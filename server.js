var net = require("net");
var server = net.createServer(function(socket) {
	socket.end("hello boys goodbye for now....");
	
// handle connection
});
server.listen(8000,"localhost",function(){});
