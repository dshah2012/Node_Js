var util = require("util");
var name = "Colin";
var age = 100;
var format1 = util.format("Hi, my name is %s", name);
var format2 = util.format("Hi, my name is %d", age);
var format3 = util.format("Hi, my name is %j", name);
var format4 = util.format("Hi, my name is %j");
var format5 = util.format("Hi, my name is %j", name, name);
var format6 = util.format("I'm %s, and I'm %d years old", name, age);
var format7 = util.format(name, age);
console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
console.log(format6);
console.log(format7);