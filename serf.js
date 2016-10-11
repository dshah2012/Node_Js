var http=require("http");
var path = require("path");
var filename="bar.txt";
var from = "C:\Program Files\nodejs";
var to = "C:\wamp\www\shoes";
var relative = path.relative(from, to);
console.log(relative);
var request = http.request({
hostname: "localhost",
port: 8000,
path: "/",
method: "POST",
headers: {
"Host": "localhost:8000",
"Content-Type": "application/x-www-form-urlencoded",
"Content-Length": Buffer.byteLength(filename)
}
}, function(response) {
response.setEncoding("utf8");
response.on("data", function(data) {
process.stdout.write(data);
});
response.on("end", function() {
console.log();
});
});
request.end(filename);