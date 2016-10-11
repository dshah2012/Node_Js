var http=require("http");
var cluster=require("cluster");
var no_of_cpus=require("os").cpus().length;


if(cluster.isMaster)
{
	for(var i=0;i<no_of_cpus;i++)
		{
				console.log("child process");
				cluster.fork();
		}
}else
{
http.createServer(function(request,response){
console.log(process.pid+"requested for" +request.url);
response.writeHead(200);
response.end("Hello");
}).listen(8000);
}		
		