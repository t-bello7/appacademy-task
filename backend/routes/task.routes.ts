import express from "express";

const taskRoutes = express.Router()

taskRoutes.get("/", (req, res) => {
    res.json({ message: "Get all tasks"});
})

// taskRoutes.get("/cr", (req, res) => {
//     res.json({ message: "Welcome to register page"});
// })

export default taskRoutes;