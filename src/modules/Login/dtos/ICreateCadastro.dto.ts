// ICreateLoginDTO.ts
import { TipoUsuario } from "@prisma/client";

export default interface ICreateCadastroDTO {
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario; // Use o tipo diretamente do Prisma
}
