var Sequelize = require('sequelize');
var sequelize = new Sequelize("dates_request", "root", "", {
  dialect: "mysql"
});

module.exports = sequelize;