const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_database', 'root', 'testtest', {
  host: 'localhost',
  dialect: 'mysql'
});



const checkConnection =async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection()

module.exports = sequelize