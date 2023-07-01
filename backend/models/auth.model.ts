import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db.config';
import Task from './task.model';

interface UserAttributes {
	userId: number;
	userName: string;
	password: string;
}

export interface UserInput extends Optional<UserAttributes, 'userId'>{}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserInput, UserOutput>implements UserAttributes {
	public userId!: number
	public userName: string
	public password: string

	public readonly createdAt!: Date;
	public readonly updateAt!: Date;
	public readonly deletedAt!: Date;
}

User.init({
	userId: {
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
	paranoid: true
})

User.hasMany(Task)
Task.belongsTo(User);

export default User;
