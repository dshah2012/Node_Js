var zlib = require("zlib");
var data = "This is some data to compress!";
zlib.deflate(data, function(error, compressed) {
if (error) {
return console.error("Could not compress data!");
}
console.log(compressed.toString());
zlib.unzip(compressed, function(error, decompressed) {
if (error) {
return console.error("Could not decompress data!");
}
console.log(decompressed.toString());
});
});