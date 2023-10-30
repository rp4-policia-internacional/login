import { TipoUsuario } from "@prisma/client";

class LoginEntity {
  id: string;
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario;

  constructor(
    id: string,
    nome: string,
    email: string,
    senha: string,
    tipoUsuario: TipoUsuario
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipoUsuario = tipoUsuario;
  }
}

export default LoginEntity;
