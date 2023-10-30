// services/AuthService.ts
import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // Crie uma instância do Prisma Client


class AutenticacaoLoginService {
    public async authenticate(email: string, senha: string): Promise<string> {
      // Realize a consulta para encontrar todos os usuários com o email fornecido
      const users = await prisma.login.findMany({
        where: {
          email: email,
        },
      });
  
      // Verifique se encontrou algum usuário com o email fornecido
      if (users.length === 0) {
        throw new AppError("Usuário não encontrado", 404);
      }
  
      // Verifique as senhas dos usuários encontrados
      const user = users.find((u) => u.senha === senha);
  
      if (!user) {
        throw new AppError("Credenciais inválidas", 401);
      }
  
      // Autenticação bem-sucedida
      const token = jwt.sign({ id: user.id, email: user.email }, "seu_segredo_secreto", {
        expiresIn: "1h",
      });
  
      return token;
    }

    
  }
  export default AutenticacaoLoginService;
