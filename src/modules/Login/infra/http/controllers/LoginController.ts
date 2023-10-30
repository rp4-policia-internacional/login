import CreateLoginService from "@modules/Login/services/CreateLoginService";
import DeleteLoginService from "@modules/Login/services/DeleteLoginService";
import FindOneLoginService from "@modules/Login/services/FindOneLoginService";
import ListLoginService from "@modules/Login/services/ListLoginService";
import UpdateLoginService from "@modules/Login/services/UpdateLoginService";
import { Request, Response } from "express";
import { container } from "tsyringe";

import jwt from "jsonwebtoken";
import AutenticacaoLoginService from "@modules/Login/services/AutenticacaoLoginService";

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

    const token = jwt.sign(createdLogin, "seu_segredo_secreto", {
      expiresIn: "1h",
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

    public async authenticate(req: Request, res: Response): Promise<Response> {
      const { email, senha } = req.body;
      
      console.log("Email recebido:", email);
  console.log("Senha recebida:", senha);
      const autenticacaoLoginService = container.resolve(AutenticacaoLoginService);
  
      try {
        const token = await autenticacaoLoginService.authenticate(email, senha);
        return res.json({ token });
      } catch (error:any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
    }
}
