import CreateLoginService from "@modules/Login/services/CreateCadastroService";
import DeleteLoginService from "@modules/Login/services/DeleteCadastroService";
import FindOneLoginService from "@modules/Login/services/FindOneCadastroService";
import ListLoginService from "@modules/Login/services/ListCadastroService";
import UpdateCadastroService from "@modules/Login/services/UpdateCadastroService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CadastroController {

  
  public async create(req: Request, res: Response): Promise<Response> {
    const createLogin = container.resolve(CreateLoginService);

    const { nome, email, senha, tipoUsuario } = req.body;
    const createdLogin = await createLogin.execute({
      nome,
      email,
      senha,
      tipoUsuario,
    });

    return res.json(createdLogin).status(201).send("Cadastro criado");

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
    const updateLogin = container.resolve(UpdateCadastroService);

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
