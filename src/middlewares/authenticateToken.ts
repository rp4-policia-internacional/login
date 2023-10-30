// middleware/auth.ts
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Token JWT não fornecido" });

  jwt.verify(token, "seu_segredo_secreto", (err, user) => {
    if (err) return res.status(403).json({ error: "Token JWT inválido" });

    req.user = user;
    next();
  });


 
  
  

}
