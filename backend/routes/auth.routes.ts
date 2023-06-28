import express from "express";
import { register, login } from "../controllers/auth.controller";

const authRoutes = express.Router()

authRoutes.get("/login", login);

authRoutes.get("/register", register)

export default authRoutes;