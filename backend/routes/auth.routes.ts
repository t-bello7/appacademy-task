import express from "express";
import { register, login } from "../controllers/auth.controller";

const authRoutes = express.Router()

authRoutes.post("/login", login);

authRoutes.post("/register", register)

export default authRoutes;