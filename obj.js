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
},
inspect: function() {
return "{Where'd everything go?}";
}
};
console.log(util.inspect(obj));