"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const authRoutes = express_1.default.Router();
authRoutes.post("/login", auth_controller_1.login);
authRoutes.post("/register", auth_controller_1.register);
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map