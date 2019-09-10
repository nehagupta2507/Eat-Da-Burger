// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.create("burgers", "burger_name", vals, function(res) {
      cb(res);
    });
  },
  update: function(boolean, condition, cb) {
    orm.update("burgers", "devoured", boolean, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
      orm.delete("burgers", condition, cb )
}
};
// Export the database functions for the controller (catsController.js).
module.exports = burger;
