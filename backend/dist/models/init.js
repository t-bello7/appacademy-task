"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_model_1 = __importDefault(require("./auth.model"));
const task_model_1 = __importDefault(require("./task.model"));
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => Promise.all([
    auth_model_1.default.sync({ alter: isDev }),
    task_model_1.default.sync({ alter: isDev })
]);
exports.default = dbInit;
//# sourceMappingURL=init.js.map