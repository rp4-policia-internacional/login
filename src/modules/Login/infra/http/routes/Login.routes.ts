import { Router } from "express";

import CadastroController from "../controllers/LoginController";


const loginRoutes = Router();

const controller = new CadastroController();
loginRoutes.post("/", controller.create);

export default loginRoutes;
