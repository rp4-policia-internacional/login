import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import LoginEntity from "../entities/Login.entity";
import ILoginRepository from "../repositories/ILoginRepository";

@injectable()
class UpdateLoginService {
  constructor(
    @inject("LoginRepository")
    private loginRepository: ILoginRepository
  ) {}

  public async execute(data: LoginEntity): Promise<LoginEntity> {
    const findLogin = await this.loginRepository.findById(data.id);

    if (!findLogin) {
      throw new AppError("Autentiação não encontrada!!", 404);
    }

    const updateLogin = await this.loginRepository.update(data);
    return updateLogin;
  }
}

export default UpdateLoginService;
