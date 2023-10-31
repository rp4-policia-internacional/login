-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMINISTRADOR', 'PAIS', 'POLICIAL');

-- CreateTable
CREATE TABLE "Cadastro" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "senha" VARCHAR NOT NULL,
    "tipoUsuario" "TipoUsuario" NOT NULL,

    CONSTRAINT "Cadastro_pkey" PRIMARY KEY ("id")
);
