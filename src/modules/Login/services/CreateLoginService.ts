
import { inject, injectable } from "tsyringe";

import ICreateLoginDTO from "../dtos/ICreateLogin.dto";
import ILoginRepository from "../repositories/ILoginRepository";
import LoginEntity from "../entities/Login.entity";


@injectable()
class CreateLoginService{

    constructor(
        @inject('LoginRepository')
        private loginRepository: ILoginRepository
    ){}
        public async execute(data: ICreateLoginDTO): Promise<LoginEntity>{
            const login = await this.loginRepository.create(data);
            return login;
        }
}
export default CreateLoginService;