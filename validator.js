var express = require("express");
var validator = require("express-validator");
var http = require("http");
var app = express();
app.use(express.bodyParser());
app.use(validator());
app.get("/products/:productId", function(req, res, next) {
var errors;
req.assert("productId", "Missing product ID").notEmpty();
req.assert("productId", "Invalid product ID").isAlpha().len(2, 10);
errors = req.validationErrors();
if (errors) {
return res.send(errors);
}
res.send("Requested " + req.params.productId);
});
http.createServer(app).listen(8000);