"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    todoText: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isComplete: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    isArchived: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    sequelize: db_config_1.default,
    paranoid: true
});
exports.default = Task;
//# sourceMappingURL=task.model.js.map