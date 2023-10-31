import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import ICadastroRepository from "../repositories/ICadastroRepository";

@injectable()
class DeleteLoginService {
  constructor(
    @inject("LoginRepository")
    private loginRepository: ICadastroRepository
  ) {}
  public async execute(id: string): Promise<void> {
    const findLogin = await this.loginRepository.findById(id);

    if (!findLogin) {
      throw new AppError("Autenticação não encontrada!!", 404);
    }

    await this.loginRepository.delete(id);

    return;
  }
}

export default DeleteLoginService;
