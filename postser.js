var http = require("http");
var fs=require("fs");
var server = http.createServer(function(request, response) {
var bodyString = "";
request.setEncoding("utf8");
request.on("data", function(data) {
bodyString = data;
});
request.on("end", function() {
var body = bodyString;
console.log(body);
fs.readFile(body, "utf8", function(error, data) {
	if (error) {
	throw error;
	}
	var buffer=new Buffer(data);
	response.write(buffer);
	response.end();
});
});
});
server.listen(8000);