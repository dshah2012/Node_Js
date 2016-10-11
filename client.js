var net = require("net");
var client = net.connect(8000, "localhost")
client.on("data",function(data){
process.stdout.write(data);
});
client.setTimeout(10000,function()
{
	console.error("time up");
	client.end();
});