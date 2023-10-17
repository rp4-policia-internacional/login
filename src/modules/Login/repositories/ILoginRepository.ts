import ICreateLoginDTO from "../dtos/ICreateLogin.dto";
import LoginEntity from "../entities/Login.entity";


export default interface ILoginRepository {
  create(data: ICreateLoginDTO): Promise<LoginEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<LoginEntity>;
  update(data: LoginEntity): Promise<LoginEntity>;
  listAll(): Promise<LoginEntity[]>;
}
