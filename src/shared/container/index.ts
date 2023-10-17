
import { container } from "tsyringe";

import ILoginRepository from "@modules/Login/repositories/ILoginRepository";
import LoginRepository from "@modules/Login/infra/prisma/repositories/LoginRepository";

container.registerSingleton<ILoginRepository>("LoginRepository", LoginRepository);
