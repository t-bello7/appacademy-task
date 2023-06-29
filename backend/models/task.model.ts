import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config';

export const Task = sequelize.define('User',{
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
    todoText: {
		type: DataTypes.STRING,
		allowNull: false
	}
})
