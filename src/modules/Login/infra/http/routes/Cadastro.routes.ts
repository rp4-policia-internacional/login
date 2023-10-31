import { Router } from "express";

import CadastroController from "../controllers/CadastroController";
//conjunto de rotas relacionada as operações da vitima

const cadastroRoutes = Router();

const controller = new CadastroController();
cadastroRoutes.post("/", controller.create);
cadastroRoutes.delete("/:id", controller.delete);
cadastroRoutes.get("/:id", controller.getOne);
cadastroRoutes.get("/", controller.getAll);
cadastroRoutes.put("/", controller.update);

export default cadastroRoutes;
