import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://todo_user:todo_user@localhost:5432/todo_database')

export const User = sequelize.define('User',{
	userName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
})

sequelize.sync().then(() => {
	console.log('Book table created successfully!');
 }).catch((error) => {
	console.error('Unable to create table : ', error);
 });