var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
if (cluster.isMaster) {
cluster.setupMaster({
exec: __filename,
args: process.argv.slice(),
silent: false
});
for (var i = 0; i < numCPUs; i++) {
cluster.fork();
}
} else {

}