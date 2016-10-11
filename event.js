var events = require("events");
var emitter = new events.EventEmitter();
var username = "darshan";
var password = "password";
// an event listener
emitter.on("userAdded", function(username, password) {
console.log("Added user " + username);
});
// add the user
// then emit an event
emitter.emit("userAdded", username, password);