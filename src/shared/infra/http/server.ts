import "reflect-metadata";
import cors from "cors";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import routes from "./routes";
import AppError from "@shared/Errors/AppError";
import "@shared/container";
import "@shared/infra/prisma";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "@shared/infra/http/routes/swagger.json";
import { authenticateToken }from "middlewares/authenticateToken";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

declare global {
  namespace Express {
    interface Request {
      user?: any; // Você pode definir um tipo mais específico para "user" aqui
    }
  }
}




// Rota protegida
app.get("/recurso_protegido", authenticateToken, (req, res) => {
  // Se o token JWT é válido, o middleware permitirá o acesso a esta rota
  // Você pode acessar o usuário autenticado com req.user
  res.json({ mensagem: "Você tem acesso a este recurso protegido" });
});



app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

//swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const porta = process.env.PORT || 3333;
app.listen(porta, () => console.log(`Server is up! on port ${porta}`));






// Defina a interface Request neste arquivo
/*declare global {
  namespace Express {
    interface Request {
      user?: any; // Você pode definir um tipo mais específico para "user" aqui
    }
  }
}*/

// verifica se um token JWT é válido e
/*function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Token JWT não fornecido" });

  jwt.verify(token, "seu_segredo_secreto", (err, user) => {
    if (err) return res.status(403).json({ error: "Token JWT inválido" });

    req.user = user;
    next();
  });
}

// Rota protegida
app.get("/recurso_protegido", authenticateToken, (req, res) => {
  // Se o token JWT é válido, o middleware permitirá o acesso a esta rota
  // Você pode acessar o usuário autenticado com req.user
  res.json({ mensagem: "Você tem acesso a este recurso protegido" });
});
// rota de autenticação que permite que os usuários forneçam credenciais se for válida o servidor responde com um token
app.post("/api/login", (req: Request, res: Response) => {
  const { email, senha } = req.body;

  // Realize a autenticação, mas não crie um registro no banco de dados
  if (email === "milena@gmail.com" && senha === "123") {
    // Autenticação bem-sucedida
    const user = {
      email: "milena@gmail.com",
      tipoUsuario: "admin",
    };

    const token = jwt.sign(user, "seu_segredo_secreto", { expiresIn: "1h" });
    console.info(token);
    return res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciais inválidas" });
  }
});*/




