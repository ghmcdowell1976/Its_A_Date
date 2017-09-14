var Sequelize = require('sequelize');
var sequelize = require('../config/db');

const PerfectDate = sequelize.define('date', {
  type_of_date: {
  	type: Sequelize.STRING
  },
  activities: {
  	type: Sequelize.STRING
  },
  name: {
  	type: Sequelize.STRING
  },
  description_text: {
  	type: Sequelize.TEXT
  },
  website: {
  	type: Sequelize.STRING
  }
});

module.exports = PerfectDate;