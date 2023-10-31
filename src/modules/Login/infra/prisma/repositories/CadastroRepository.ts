import ICreateCadastroDTO from "@modules/Login/dtos/ICreateCadastro.dto";
import ICreateLoginDTO from "@modules/Login/dtos/ICreateCadastro.dto";
import CadastroEntity from "@modules/Login/entities/Cadastro.entity";
import ICadastroRepository from "@modules/Login/repositories/ICadastroRepository";
import { TipoUsuario } from "@prisma/client";
import { prisma } from "@shared/infra/prisma";
/// Pega o dado do banco, verifica

export default class CadastroRepository implements ICadastroRepository {
  public async create(data: ICreateCadastroDTO): Promise<CadastroEntity> {
    const cadastro = await prisma.cadastro.create({data});

    return cadastro as unknown as CadastroEntity;  // tirando tipagem
}

  public async delete(id: string): Promise<void> {
    await prisma.cadastro.delete({ where: { id } });
  }
  public async findById(id: string): Promise<CadastroEntity> {
    const cadastro = await prisma.cadastro.findUnique({ where: { id } });

    return cadastro as unknown as CadastroEntity;
  }
  public async update(data: CadastroEntity): Promise<CadastroEntity> {
    const cadastro = await prisma.cadastro.update({ where: { id: data.id }, data });

    return cadastro as unknown as CadastroEntity;
  }
  public async listAll(): Promise<CadastroEntity[]> {
    return await prisma.cadastro.findMany();
  }

  public async findByEmail(email: string): Promise<CadastroEntity | null> {
    const user = await prisma.cadastro.findFirst({
      where: {
        email: email,
      },
    });
  
    if (user) {
      // Mapeie os campos do objeto retornado pelo Prisma para um novo objeto do tipo cadastroEntity
      const cadastroEntity: CadastroEntity = {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        tipoUsuario: user.tipoUsuario,
      };
  
      return cadastroEntity;
    } else {
      return null;
    }
  }
  
}
