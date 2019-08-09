"user strict";
var sql = require("../db.js");
var table = 'client'
//Client object constructor
var Client = function(values) {
  //this.param_one = values.param_one;
  //this.param_two = values.param_two;
  this.first_name = values.first_name;
  this.last_name = values.last_name;
  this.email = values.email;
  
  this.status = values.status;
  this.created_at = new Date();
};

Client.create = function(values, result) {
  sql.query("INSERT INTO " + table + " set ?", values, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("resultado guardar: ", res);
      console.log(res);
      result(null, res);
    }
  });
};

Client.getById = function(id, result) {
  sql.query("Select * from " + table + " where id = ? ", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Client.getAllTask = function(result) {
  sql.query("Select * from " + table + "", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(table + " : ", res);
      result(null, res);
    }
  });
};

Client.updateById = function(id, values, result) {  
  var query = "UPDATE " + table + " SET first_name=?, last_name=?, email=?, status=? WHERE id=?";

  sql.query(query, [values.first_name, values.last_name, values.email, values.status, id], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Client.deleteById = function(id, result) {
  sql.query("DELETE FROM " + table + " WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Client;



