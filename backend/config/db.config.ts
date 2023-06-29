import { Sequelize } from 'sequelize';
declare var process: {     env: {         [key: string]: string;     } };
export interface ProcessEnv {
    [key: string]: string | undefined
}
console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL)

export const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully');
	} catch (error) {
		console.log('Unable to connect to the database:', error);
	}
}

export default sequelize