var vm = require("vm");
var code = "console.log(foo);";
foo = "Hello vm";
vm.runInThisContext(code);