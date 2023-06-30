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
exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_dal_1 = require("../dal/auth.dal");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield (0, auth_dal_1.find)(req.body);
        if (user) {
            return res.status(400).send({
                message: 'User already exist'
            });
        }
        if (req.body.password != req.body.confirm_password) {
            return res.status(400).send({
                message: 'Password does not match'
            });
        }
        yield (0, auth_dal_1.create)({
            userName: req.body.userName,
            password: bcrypt_1.default.hashSync(req.body.password, 8),
        });
        return res.status(200).send({ message: "User created successfully" });
    }
    catch (error) {
        return res.status(500).send({
            message: "Failed to create user",
            error: error
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, auth_dal_1.find)(req.body);
        if (!user) {
            return res.status(400).send({
                message: "Invalid Credentials"
            });
        }
        const passwordIsValid = bcrypt_1.default.compareSync(req.body.password, user.password);
        const token = jsonwebtoken_1.default.sign({ userName: user.userName }, "dwefwc", {
            expiresIn: 86400
        });
        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Credentials",
            });
        }
        req.session.token = token;
        return res.status(200).send({ userName: user.userName, token: token });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session = null;
        return res.status(200).send({
            message: "Signed out"
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map