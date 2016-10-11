console.log("This file is " + __filename);
console.log("It's located in " + __dirname);
console.log("The current working directory is "+process.cwd());
try
{
process.chdir("/");
}catch(exception)
{
	console.log("The error is now" +exception.message);
}
console.log("The error is now" +process.cwd());
console.log(process.execPath);

console.log("-------------------------------------");
var path = require("path");
var from = "/foo/bar";
var to = "/baz/biff";
var relative = path.relative(from, to);
console.log(relative);