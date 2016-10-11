var util = require("util");
var obj = {
foo: {
bar: {
baz: {
baff: false,
beff: "string value",
biff: null
},
boff: []
}
}
};
console.log(util.inspect(obj));