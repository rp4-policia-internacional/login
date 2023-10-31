import { inject, injectable } from "tsyringe";

import {ILoginDTO, ILoginResponseDTO} from "../dtos/ILogin.dto";
import ILoginRepository from "../repositories/ICadastroRepository";
import AppError from "@shared/Errors/AppError";

import jwt from "jsonwebtoken";
const SECRET = "token";
@injectable()
class LoginService {
  constructor(
    @inject("LoginRepository")
    private loginRepository: ILoginRepository
  ) {}
  public async execute(data: ILoginDTO): Promise<ILoginResponseDTO> {

    const user = await this.loginRepository.findByEmail(data.email);
    if(!user) {
        throw new AppError("Usuário não encontrado pelo email.", 401);
    }

    if(user.senha === data.senha){
      
        const token = jwt.sign(user, SECRET, {
        expiresIn: "3000",
        });

        console.info(token);
        return {acessToken:token} ;
    }
    
    throw new AppError("Usuário não encontrado.", 401);
  }
}
export default LoginService;
