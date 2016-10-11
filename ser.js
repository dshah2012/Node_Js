var net=require("net");
var cp=require("child_process");
var ff=cp.fork("cli.js");
var server=net.createServer();
server.listen(3456,function()
{
	ff.send("server",server);
	
});
server.on("error",function(error){
console.error(error.message);
});
