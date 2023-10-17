import { injectable, inject } from "tsyringe";

import ILoginRepository from "../repositories/ILoginRepository";

@injectable()
class ListLoginService {
  constructor(
    @inject("LoginRepository")
    private loginRepository: ILoginRepository
  ) {}

  public async execute() {
    return await this.loginRepository.listAll();
  }
}

export default ListLoginService;
