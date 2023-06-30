import { Response } from "express";
import User from "../models/auth.model";
import sequelize from "../config/db.config";
import { authRequest } from "../utils/routeParam";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { find, create, findOrCreate } from "../dal/auth.dal";

export const register = async (req: authRequest, res: Response) => {
   console.log(req.body);
         try {
         let user = await find(req.body)
         console.log(user)
         if (user) {
            return res.status(400).send({
               message: 'User already exist'
            })  
         }
        if (req.body.password != req.body.confirm_password) {
        return res.status(400).send({
            message: 'Password does not match'
         })}
         await create({
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password, 8),
        })
        return res.status(200).send({ message: "User created successfully"});
      } 
      catch (error){
         return res.status(500).send({
            message: "Failed to create user",
            error: error
          });
      }  
   }

export const login = async (req, res: Response) => {
      try{
         const user = await find(req.body)
         if (!user) {
            return res.status(400).send({
               message: "User not found"
            });
         }
         const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
          const token = jwt.sign({ userName: user.userName}, "dwefwc", {
            expiresIn: 86400
          })
          console.log(token);
          if (!passwordIsValid) {
            return res.status(401).send({
              message: "Invalid Password!",
            });
          }
         //  req.session.token = token;
         
         return res.status(200).send({ userName: user.userName });
     }
     catch (error) {
      return res.status(500).send({ message: error.message })
      }
}

export const logout = async ( req, res ) => {
   try {
      req.session = null;
      return res.status(200).send({
         message: "Signed out"
      })
   } catch (error) {
      console.log(error);
   }
}