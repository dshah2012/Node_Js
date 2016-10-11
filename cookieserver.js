var http = require("http");
var connect = require("connect");
var app = connect();
app.use(connect.cookieParser());
app.use(function(request, response, next) {
var cookies = request.cookies;
var count = parseInt(cookies.count, 10);
var setCookie = "count=" + (count + 1);
response.setHeader("Set-Cookie", setCookie);
response.end();
});
http.createServer(app).listen(8000);