import { Op } from "sequelize";
import { Task } from "../models";
import { TaskOutput, TaskInput } from "../models/task.model";
import { GetAllTasksFilters } from "./types";
export const create = async (payload:TaskInput): Promise<TaskOutput> => {
    const task = await Task.create(payload);
    return task;
}

export const update = async (id: number, payload: Partial<TaskInput>): Promise<TaskOutput> => {
    try {
        const task = await Task.findByPk(id);
        if (!task) {
            throw new Error('Task not found');
        }
        const updatedTask = await ( task as Task ).update(payload);
        return updatedTask;
    } catch (error) {
        return error
    }
    
}

export const getById = async (id: number): Promise<TaskOutput> => {
    try {
        const task = await Task.findByPk(id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;    
    } catch (error) {
        return error
    }
    
}

export const deleteById = async (id: number): Promise<Boolean> => {
    try {
        const deleteTaskCount = await Task.destroy({
            where: {id}
        })
    
        return !!deleteTaskCount
    } catch (error) {
        return error
    }
}

export const getAll = async (filters?: GetAllTasksFilters): Promise<TaskInput[]> => {
    try {
        return Task.findAll({
            where: {
                ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
            },
            ...((filters?.isDeleted || filters.includeDeleted) && {paranoid: true})
        })
    } catch (error) {
        return error
    }
    
}

// data to get all task created by author or get all task belonging to user