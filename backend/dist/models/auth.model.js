"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const task_model_1 = __importDefault(require("./task.model"));
class User extends sequelize_1.Model {
}
User.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: db_config_1.default,
    paranoid: true
});
User.hasMany(task_model_1.default);
task_model_1.default.belongsTo(User, { as: 'User', foreignKey: 'id' });
exports.default = User;
//# sourceMappingURL=auth.model.js.map