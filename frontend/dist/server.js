"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
// const bodyParser = require("body-parser");
const body_parser_1 = __importDefault(require("body-parser"));
// const cors = require("cors");
const cors_1 = __importDefault(require("cors"));
// const { connectDB } = require('./config/database');
const app = (0, express_1.default)();
// connectDB();
const corsOptions = {
    origin: "http://localhost:5000"
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to todo application." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map