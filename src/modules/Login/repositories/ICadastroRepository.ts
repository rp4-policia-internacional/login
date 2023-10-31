import ICreateCadastroDTO from "../dtos/ICreateCadastro.dto";
import LoginEntity from "../entities/Cadastro.entity";

export default interface ICadastroRepository {
  create(data: ICreateCadastroDTO): Promise<LoginEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<LoginEntity>;
  update(data: LoginEntity): Promise<LoginEntity>;
  listAll(): Promise<LoginEntity[]>;
  findByEmail(email: string): Promise<LoginEntity | null>; // Novo método para buscar usuário por email
}
