var events = require("events");
var emitter = new events.EventEmitter();
function handler() {
console.log("In foo handler");
}
emitter.on("foo", handler);
emitter.removeListener("foo", handler);
emitter.emit("foo");