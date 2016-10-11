var mysql = require("mysql");
var pool = mysql.createPool({
"host": "localhost",
"user": "username",
"password": "secret",
"database": "dbname"
});
pool.getConnection(function(error, connection) {
if (error) {
return console.error(error);
}
// Connection available for use
});