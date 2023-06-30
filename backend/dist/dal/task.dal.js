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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield models_1.Task.create(payload);
    return task;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield models_1.Task.findByPk(id);
    if (!task) {
        throw new Error('Task not found');
    }
    const updatedTask = yield task.update(payload);
    return updatedTask;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield models_1.Task.findByPk(id);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
});
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTaskCount = yield models_1.Task.destroy({
        where: { id }
    });
    return !!deleteTaskCount;
});
exports.deleteById = deleteById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Task.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || filters.includeDeleted) && { paranoid: true })));
});
exports.getAll = getAll;
// data to get all task created by author or get all task belonging to user
//# sourceMappingURL=task.dal.js.map