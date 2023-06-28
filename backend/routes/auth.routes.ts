import express from "express";

const authRoutes = express.Router()

authRoutes.get("/login", (req, res) => {
    res.json({ message: "Welcome to login page"});
})

authRoutes.get("/register", (req, res) => {
    res.json({ message: "Welcome to register page"});
})

export default authRoutes;