const {DataTypes} = require('sequelize');
const sequelize = require('../dbConnection')

const Task = sequelize.define('Task', {
  name:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Task;