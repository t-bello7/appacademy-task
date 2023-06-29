import express from "express";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    deleteTasks,
} from "../controllers/task.controller";

const taskRoutes = express.Router()

taskRoutes.get("/", getTasks);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);
taskRoutes.delete("/", deleteTasks);

export default taskRoutes;