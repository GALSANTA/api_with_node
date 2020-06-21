const mysql = require('mysql');

var connection = mysql.createConnection({
    "user":"root",
    "password":"",
    "database":"biblioteca",
    "host":"localhost",
    "port":3306
});

module.exports = connection;