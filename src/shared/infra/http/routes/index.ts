import loginRoutes from "@modules/Login/infra/http/routes/Login.routes";

import { Router } from "express";
const routes = Router();

routes.use("/login", loginRoutes);

export default routes;
