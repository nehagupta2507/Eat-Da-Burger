// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + `${tableInput}` + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}")`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, cols, boolean, condition, cb) {
    const querySting = `UPDATE ${table} SET ${cols} = ${boolean} WHERE ${condition}`;
    console.log(queryString);
    connection.query(querySting, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    const queryString = `DELETE FROM ${table} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
