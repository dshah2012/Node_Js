var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();
var input = fs.createReadStream("foo.txt");
var output = fs.createWriteStream("input.txt.gz");
input.pipe(gzip).pipe(output);