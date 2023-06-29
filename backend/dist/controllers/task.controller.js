"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasks = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const getTasks = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "getAllTask" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "create tasks" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.createTask = createTask;
const updateTask = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "update Tasks" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "delete task" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.deleteTask = deleteTask;
const deleteTasks = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "delete all tasks by created user " });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.deleteTasks = deleteTasks;
//# sourceMappingURL=task.controller.js.map