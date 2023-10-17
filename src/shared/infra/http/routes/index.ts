import loginRoutes from "@modules/Login/infra/http/routes/Resgate.routes";

import { Router } from "express";
const routes = Router();

routes.use("/login", loginRoutes);

export default routes;
