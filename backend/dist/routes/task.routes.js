"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskRoutes = express_1.default.Router();
taskRoutes.get("/", (req, res) => {
    res.json({ message: "Get all tasks" });
});
// taskRoutes.get("/cr", (req, res) => {
//     res.json({ message: "Welcome to register page"});
// })
exports.default = taskRoutes;
//# sourceMappingURL=task.routes.js.map