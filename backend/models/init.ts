import User from "./auth.model";
import Task from "./task.model";

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => Promise.all([
    User.sync({alter: isDev}),
    Task.sync({alter: isDev})
])   

export default dbInit;