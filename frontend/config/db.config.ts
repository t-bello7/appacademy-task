const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://todo_user:todo_user@localhost:5432/todo_database')

const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully');
	} catch (error) {
		console.log('Unable to connect to the database:', error);
	}
}

module.exports = {connectDB, sequelize}
