import { container } from "tsyringe";

import ILoginRepository from "@modules/Login/repositories/ICadastroRepository";
import LoginRepository from "@modules/Login/infra/prisma/repositories/CadastroRepository";

container.registerSingleton<ILoginRepository>(
  "LoginRepository",
  LoginRepository
);
