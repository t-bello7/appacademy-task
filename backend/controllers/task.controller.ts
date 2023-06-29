import { Request, Response } from "express";
import { Task } from "../models/task.model";
import sequelize from "../config/db.config";

export const getTasks = (req: Request, res: Response) => {
    sequelize.sync().then(() => {
        res.json({ message: "getAllTask"});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const createTask = (req: Request, res: Response) => {
    sequelize.sync().then(() => {
        res.json({ message: "create tasks"});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const updateTask = (req: Request, res: Response) => {
    sequelize.sync().then(() => {
        res.json({ message: "update Tasks"});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const deleteTask = (req: Request, res: Response) => {
    sequelize.sync().then(() => {
        res.json({ message: "delete task"});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const deleteTasks = (req: Request, res: Response) => {
    sequelize.sync().then(() => {
        res.json({ message: "delete all tasks by created user "});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}
