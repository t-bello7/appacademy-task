import { User } from '../models';
import { UserOutput, UserInput } from "../models/auth.model"

export const create = async (payload: UserInput): Promise<UserOutput> => {
    try {
        const user = await User.create(payload)
        return user
    } catch (error) {
        return error
    }
}

export const findOrCreate = async (payload:UserInput): Promise<UserOutput> => {
    try {
        const [user] = await User.findOrCreate({
            where: {
                userName: payload.userName
            },
            defaults: payload
        })
        return user
    } catch (error) {
        return error
    }
}

export const find =async (payload:UserInput): Promise<UserOutput> => {
    try {
        const user = await User.findOne({
            where: {
                userName: payload.userName
            }
        })
        return user
    } catch (error) {
        return error
    }
}