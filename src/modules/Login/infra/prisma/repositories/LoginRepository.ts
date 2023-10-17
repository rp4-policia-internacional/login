
import ICreateLoginDTO from "@modules/Login/dtos/ICreateLogin.dto";
import LoginEntity from "@modules/Login/entities/Login.entity";
import ILoginRepository from "@modules/Login/repositories/ILoginRepository";
import { prisma } from "@shared/infra/prisma";


export default class LoginRepository implements ILoginRepository {
  public async create(data: ICreateLoginDTO): Promise<LoginEntity> {
    const login = await prisma.login.create({ data });

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
}
