var path = require("path");
process.env.PATH.split(path.delimiter).forEach(function(dir) {
console.log(dir);
});