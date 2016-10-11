var proxyServer = require("http-proxy");
var servers = [
{
host: "localhost",
port: 8001
},
{
host: "localhost",
port: 8002
}
];
proxyServer.createServer(function (req, res, proxy) {
var target = servers.shift();
console.log("proxying to " + JSON.stringify(target));
proxy.proxyRequest(req, res, target);
servers.push(target);
}).listen(8000);