"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = exports.getAllTask = exports.deleteAllTask = exports.deleteTask = exports.updateTask = exports.createTask = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const task_dal_1 = require("../dal/task.dal");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, task_dal_1.create)(req.body);
        return res.status(200).send(task);
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        console.log(req.body);
        const updatedTask = yield (0, task_dal_1.update)(id, req.body);
        return res.status(201).send(updatedTask);
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield (0, task_dal_1.deleteById)(id);
        return res.status(204).send({ success: result });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
const deleteAllTask = (req, res) => {
    db_config_1.default.sync().then(() => {
        res.json({ message: "delete all tasks by created user " });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.deleteAllTask = deleteAllTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = req.query;
        const tasks = yield (0, task_dal_1.getAll)(filters);
        return res.status(200).send(tasks);
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.getAllTask = getAllTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const task = yield (0, task_dal_1.getById)(id);
    return res.status(200).send(task);
});
exports.getTask = getTask;
//# sourceMappingURL=task.controller.js.map