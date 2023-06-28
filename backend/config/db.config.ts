import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgresql://todo_user:todo_user@localhost:5432/todo_database')

export const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully');
	} catch (error) {
		console.log('Unable to connect to the database:', error);
	}
}

export default sequelize