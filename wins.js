var win=require("winston");
var fs=require("fs");
var path="foo.txt";
fs.open(path,"r",function(error,fd){
if(error){
win.error("There is no file such that %s",path,error)}
else
{
win.info("Cool");
}
});
//win.info("Hello friend");
//win.warn("I am warning you");
//win.error("There is something bad");
