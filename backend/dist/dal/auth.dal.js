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
exports.find = exports.findOrCreate = exports.create = void 0;
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.create(payload);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.create = create;
const findOrCreate = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user] = yield models_1.User.findOrCreate({
            where: {
                userName: payload.userName
            },
            defaults: payload
        });
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.findOrCreate = findOrCreate;
const find = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({
            where: {
                userName: payload.userName
            }
        });
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.find = find;
//# sourceMappingURL=auth.dal.js.map