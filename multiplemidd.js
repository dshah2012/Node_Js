var http = require("http");
var connect = require("connect");
var app = connect();
app.use(connect.query());
app.use(function(request, response, next) {
var query = request.query;
for (q in query) {
console.log(q + ' = ' + query[q]);
}
next();
});
app.use(function(request, response, next) {
response.setHeader("Content-Type", "text/html");
response.end("Hello <strong>HTTP</strong>!");
});
http.createServer(app).listen(8000);