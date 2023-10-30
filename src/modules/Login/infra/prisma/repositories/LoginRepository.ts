import ICreateLoginDTO from "@modules/Login/dtos/ICreateLogin.dto";
import LoginEntity from "@modules/Login/entities/Login.entity";
import ILoginRepository from "@modules/Login/repositories/ILoginRepository";
import { TipoUsuario } from "@prisma/client";
import { prisma } from "@shared/infra/prisma";
/// Pega o dado do banco, verifica

export default class LoginRepository implements ILoginRepository {
  public async create(data: ICreateLoginDTO): Promise<LoginEntity> {
    const teste = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      tipoUsuario: TipoUsuario.ADMINISTRADOR,
    };

    const login = await prisma.login.create({ data: teste });

    return login as unknown as LoginEntity;
  }

  public async delete(id: string): Promise<void> {
    await prisma.login.delete({ where: { id } });
  }
  public async findById(id: string): Promise<LoginEntity> {
    const login = await prisma.login.findUnique({ where: { id } });

    return login as unknown as LoginEntity;
  }
  public async update(data: LoginEntity): Promise<LoginEntity> {
    const login = await prisma.login.update({ where: { id: data.id }, data });

    return login as unknown as LoginEntity;
  }
  public async listAll(): Promise<LoginEntity[]> {
    return await prisma.login.findMany();
  }

  public async findByEmail(email: string): Promise<LoginEntity | null> {
    const user = await prisma.login.findFirst({
      where: {
        email: email,
      },
    });
  
    if (user) {
      // Mapeie os campos do objeto retornado pelo Prisma para um novo objeto do tipo LoginEntity
      const loginEntity: LoginEntity = {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        tipoUsuario: user.tipoUsuario,
      };
  
      return loginEntity;
    } else {
      return null;
    }
  }
  
}
