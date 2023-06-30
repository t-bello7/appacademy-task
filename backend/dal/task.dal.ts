import { Op } from "sequelize";
import { Task } from "../models";
import { TaskOutput, TaskInput } from "../models/task.model";
import { GetAllTasksFilters } from "./types";
export const create = async (payload:TaskInput): Promise<TaskOutput> => {
    const task = await Task.create(payload);
    return task;
}

export const update = async (id: number, payload: Partial<TaskInput>): Promise<TaskOutput> => {
    const task = await Task.findByPk(id);
    if (!task) {
        throw new Error('Task not found');
    }
    const updatedTask = await ( task as Task ).update(payload);
    return updatedTask;
}

export const getById = async (id: number): Promise<TaskOutput> => {
    const task = await Task.findByPk(id);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
}

export const deleteById = async (id: number): Promise<Boolean> => {
    const deleteTaskCount = await Task.destroy({
        where: {id}
    })

    return !!deleteTaskCount
}

export const getAll = async (filters?: GetAllTasksFilters): Promise<TaskInput[]> => {
    return Task.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters.includeDeleted) && {paranoid: true})
    })
}

// data to get all task created by author or get all task belonging to user