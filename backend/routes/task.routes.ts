import express from "express";
import {
    getTask,
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask,
} from "../controllers/task.controller";

const taskRoutes = express.Router()

taskRoutes.get("/", getAllTask);
taskRoutes.post("/", createTask);
taskRoutes.get("/:id", getTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);
taskRoutes.delete("/", deleteAllTask);

export default taskRoutes;