"use strict";

var Client = require("../model/clientModel.js");

exports.get_all = function(req, res) {
  Client.getAllTask(function(err, values) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", values);
    res.send(values);
  });
};

exports.create = function(req, res) {
  var values = new Client(req.body);
 
  //handles null error
  if (!values.first_name || !values.last_name) {
    res
      .status(400)
      .send({ error: true, message: "Please provide first_name/last_name" });
  } else {
    Client.create(values, function(err, resData) {
      if (err) res.send(err);
      res.json(resData);
    });
  }
};

exports.get_by_id = function(req, res) {
  Client.getById(req.params.id, function(err, resData) {
    if (err) res.send(err);
    res.json(resData);
  });
};

exports.update_by_id = function(req, res) {
  Client.updateById(req.params.id, new Client(req.body), function(err, resData) {
    if (err) res.send(err);
    res.json(resData);
  });
};

exports.delete_by_id = function(req, res) {
  Client.deleteById(req.params.id, function(err, resData) {
    if (err) res.send(err);
    res.json({ message: "Client successfully deleted" });
  });
};
