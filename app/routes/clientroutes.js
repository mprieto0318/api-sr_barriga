"use strict";
module.exports = function(app) {
  var callback = require("../controller/clientController");

  // callback Routes
  app
    .route("/api/client")
    .get(callback.get_all)
    .post(callback.create);

  app
    .route("/api/client/:id")
    .get(callback.get_by_id)
    .put(callback.update_by_id)
    .delete(callback.delete_by_id);
};
