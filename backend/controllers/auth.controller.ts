import { Response } from "express";
import { User } from "../models/auth.model";
import sequelize from "../config/db.config";
import { authRequest } from "../utils/routeParam";

export const register = (req: authRequest, res: Response) => {
    sequelize.sync().then(() => {
        console.log('User Table created successfully!');
        // User.create({
        //     userName: req.username,
        //     password: req.password,
        // }).then(res => {
        //     console.log(res)
        // }).catch((error) => {
        //     console.error('Failed to create a new record : ', error);
        // });
        res.json({ message: "Welcome to register page"});
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}

export const login = (req, res) => {
    sequelize.sync().then(() => {
        console.log('User Table created successfully!');
        // User.create({
        //     userName: "Clean Code",
        //     password: "Robert Cecil Martin",
        // }).then(res => {
        //     console.log(res)
        // }).catch((error) => {
        //     console.error('Failed to create a new record : ', error);
        // });
        res.json({ message: "Welcome to login page"});
     }).catch((error) => {
        console.error('Unable to create table : ', error);
     });
}