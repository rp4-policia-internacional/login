import cadastroRoutes from "@modules/Login/infra/http/routes/Cadastro.routes";
import loginRoutes from "@modules/Login/infra/http/routes/Login.routes";

import { Router } from "express";
const routes = Router();

routes.use("/cadastro", cadastroRoutes);
routes.use("/login", loginRoutes);

export default routes;
