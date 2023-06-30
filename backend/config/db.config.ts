import { Sequelize } from 'sequelize';
import * as pg from 'pg';

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
	dialectModule: pg
})

export const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully');
	} catch (error) {
		console.log('Unable to connect to the database:', error);
	}
}

export default sequelize