var net = require("net");
var server = net.createServer(function(socket) {
// handle connection
});
server.on("close",function()
{
	console.log("server is closed");
});
server.listen(0, "::1", function() {
var address = server.address();
console.log(address);
server.close();
});