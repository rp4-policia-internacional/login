// ICreateLoginDTO.ts
import { TipoUsuario } from "@prisma/client";

export default interface ICreateLoginDTO {
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario; // Use o tipo diretamente do Prisma
}
