import LoginService from "@modules/Login/services/LoginService";
import { container } from "tsyringe";
import express, {Request, Response, NextFunction} from "express";
export default class LoginController {


    public async create(req: Request, res: Response): Promise<Response> {
        const createLogin = container.resolve(LoginService);
    
        const {email, senha} = req.body;

        const createdLogin = await createLogin.execute({
          email,
          senha
        });
    
        return res.json(createdLogin).status(200).send("Login efetuado.");
    
      }
}