import { Router } from "express";

import LoginController from "../controllers/LoginController";
//conjunto de rotas relacionada as operações da vitima

const loginRoutes = Router();

const controller = new LoginController();
loginRoutes.post("/", controller.create);
loginRoutes.delete("/:id", controller.delete);
loginRoutes.get("/:id", controller.getOne);
loginRoutes.get("/", controller.getAll);
loginRoutes.put("/", controller.update);
loginRoutes.post("/autenticacao", controller.authenticate);

export default loginRoutes;
