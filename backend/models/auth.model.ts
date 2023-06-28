import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config';

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
