import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const tokenKey = process.env.TOKEN_KEY;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, tokenKey);
    res.setHeader('Access-Control-Allow-Credentials', "*");
    res.setHeader('Access-Control-Allow-Origin', '*');
    req.body = req.body;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

