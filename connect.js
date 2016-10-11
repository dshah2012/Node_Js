var mysql = require("mysql");
var connection = mysql.createConnection({
"host": "localhost",
"port": 3306,
"user": "username",
"password": "godfather",
"database": "dash"
});

connection.connect(function(error){
if(error){
return console.error(error)
}
return console.log("Established");
});
