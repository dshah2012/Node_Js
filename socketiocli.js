<!DOCTYPE html>
<html>
<head>
<script src="/socket.io/socket.io.js"></script>
</head>
<body>
<body>
<script>
var socket = io.connect("http://localhost");
socket.emit("message", "Hello!");
socket.on("echo", function(data) {
document.write(data);
});
</script>
</body>
</html>