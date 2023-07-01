import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.config';
import Task from './task.model';

interface UserAttributes {
	id: number;
	userName: string;
	password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'>{}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserInput, UserOutput>implements UserAttributes {
	public id!: number
	public userName: string
	public password: string

	public readonly createdAt!: Date;
	public readonly updateAt!: Date;
	public readonly deletedAt!: Date;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	userName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	timestamps: true,
	sequelize: sequelize,
	paranoid: true,
	modelName: "users",
})

User.hasMany(Task, { foreignKey: 'userId'})
Task.belongsTo(User);

export default User;
