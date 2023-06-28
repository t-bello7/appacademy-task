"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes = express_1.default.Router();
authRoutes.get("/login", (req, res) => {
    res.json({ message: "Welcome to login page" });
});
authRoutes.get("/register", (req, res) => {
    res.json({ message: "Welcome to register page" });
});
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map