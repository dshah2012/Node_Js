var buf = new Buffer(9);
var data = "foo";
buf.write(data);
buf.write(data, 3);
buf.write(data, 6, data.length);
var buf1 = new Buffer([1, 2, 3, 4]);
var buf2 = new Buffer(4);
buf1.copy(buf2, 0, 0, buf1.length);