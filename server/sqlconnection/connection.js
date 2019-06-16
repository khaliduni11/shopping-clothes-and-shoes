const mysql = require("mysql");
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'market',
    password: 'password',
});

module.exports = conn;