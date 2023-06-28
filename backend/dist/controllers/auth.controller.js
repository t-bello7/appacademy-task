"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
const register = (req, res) => {
    db_config_1.default.sync().then(() => {
        console.log('User Table created successfully!');
        // User.create({
        //     userName: req.username,
        //     password: req.password,
        // }).then(res => {
        //     console.log(res)
        // }).catch((error) => {
        //     console.error('Failed to create a new record : ', error);
        // });
        res.json({ message: "Welcome to register page" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.register = register;
const login = (req, res) => {
    db_config_1.default.sync().then(() => {
        console.log('User Table created successfully!');
        // User.create({
        //     userName: "Clean Code",
        //     password: "Robert Cecil Martin",
        // }).then(res => {
        //     console.log(res)
        // }).catch((error) => {
        //     console.error('Failed to create a new record : ', error);
        // });
        res.json({ message: "Welcome to login page" });
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map