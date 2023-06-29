"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
exports.Task = db_config_1.default.define('User', {
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    todoText: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
//# sourceMappingURL=task.model.js.map