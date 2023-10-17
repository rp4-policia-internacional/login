import { injectable, inject } from "tsyringe";

import ILoginRepository from "../repositories/ILoginRepository";

@injectable()
class FindOneLoginService {
  constructor(
    @inject("LoginRepository")
    private loginRepository: ILoginRepository
  ) {}

  public async execute(id: string) {
    const findLogin = await this.loginRepository.findById(id);
    return findLogin;
  }
}

export default FindOneLoginService;
