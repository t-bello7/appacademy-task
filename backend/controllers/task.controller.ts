import { Request, Response } from "express";
import sequelize from "../config/db.config";
import { create, update, getById, deleteById, getAll } from "../dal/task.dal";
import { error } from "console";

export const createTask = async (req: Request, res: Response) => {
   try{
      const task = await create(req.body)
     return res.status(200).send(task);
   } catch (error) {
      return res.status(500).send({ message: error.message })
   }
}

export const updateTask = async (req: Request, res: Response) => {
   try {
      const id = Number(req.params.id);
      console.log(req.body)
      const updatedTask = await update(id, req.body);
      return res.status(201).send(updatedTask);
   } catch (error) {
      return res.status(500).send({ message: error.message })
   }
}

export const deleteTask = async (req: Request, res: Response) => {
   try{
      const id = Number(req.params.id);
      const result = await deleteById(id);
      return res.status(204).send({ success: result })
   } catch (error) {
      return res.status(500).send({ message: error.message })
   }
}

export const deleteAllTask = (req: Request, res: Response) => {
    
   sequelize.sync().then(() => {
        res.json({ message: "delete all tasks by created user "});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const getAllTask = async (req: Request, res: Response) => {
   const filters = req.query
   const tasks = await getAll(filters)
   return res.status(200).send(tasks)
}

export const getTask = async (req: Request, res: Response) => {
   const id = Number(req.params.id);
   const task = await getById(id);
   return res.status(200).send(task);
}