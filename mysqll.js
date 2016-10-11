var mysql = require("mysql");
var connection = mysql.createConnection({
"host": "localhost",
"port": 3306,
"user": "root",
"password": "godfather",
"database": "commentss"
});

connection.connect(function(error){
if(error)
{
return console.error(error);
}

var sql = "SELECT * FROM Person";
connection.query(sql, function(error, results) {
if (error) {
return console.error(error);
}
console.log(results);
connection.release( );
//connection.end(function(error) {
//if (error) {
//return console.error(error);
//}
//});
});