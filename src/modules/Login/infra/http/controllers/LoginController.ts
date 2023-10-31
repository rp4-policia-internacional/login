import CreateLoginService from "@modules/Login/services/CreateLoginService";
import DeleteLoginService from "@modules/Login/services/DeleteLoginService";
import FindOneLoginService from "@modules/Login/services/FindOneLoginService";
import ListLoginService from "@modules/Login/services/ListLoginService";
import UpdateLoginService from "@modules/Login/services/UpdateLoginService";
import { Request, Response } from "express";
import { container } from "tsyringe";

import jwt from "jsonwebtoken";

const SECRET = "token";
export default class LoginController {

  
  public async create(req: Request, res: Response): Promise<Response> {
    const createLogin = container.resolve(CreateLoginService);

    const { nome, email, senha, tipoUsuario } = req.body;
    const createdLogin = await createLogin.execute({
      nome,
      email,
      senha,
      tipoUsuario,
    });

    const token = jwt.sign(createdLogin, SECRET, {
      expiresIn: "3000",
    });
    console.info(token);
    return res.json({ token });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const deleteLogin = container.resolve(DeleteLoginService);

    const { id } = req.params;

    const deletedLogin = await deleteLogin.execute(id);

    return res.json(deletedLogin).status(200).send();
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    const getOneLogin = container.resolve(FindOneLoginService);

    const { id } = req.params;

    const gotOneLogin = await getOneLogin.execute(id);

    return res.json(gotOneLogin).status(200).send("Ok");
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const getAllLogin = container.resolve(ListLoginService);

    const gotAllLogin = await getAllLogin.execute();

    return res.json(gotAllLogin).status(200).send();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updateLogin = container.resolve(UpdateLoginService);

    const { id, nome, email, senha, tipoUsuario } = req.body;

    const updatedLogin = await updateLogin.execute({
      id,
      nome,
      email,
      senha,
      tipoUsuario,
    });

    return res
      .json(updatedLogin)
      .status(201)
      .send("Captura alterada com sucesso");
  }

  
}
