import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenKey = process.env.TOKEN_KEY;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(token)
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, tokenKey);
    console.log(decoded)
    req.body = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

