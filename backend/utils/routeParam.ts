import { Request } from "express";

export interface authRequest extends Request {
  username: string 
  password: string
}
