import { User } from "../models/auth.model";
import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to login page"});
})

export default router;