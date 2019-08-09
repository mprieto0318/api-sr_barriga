"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "192.168.64.2", //"localhost",
  user: "root",
  password: "",
  database: "sr_barriga"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
