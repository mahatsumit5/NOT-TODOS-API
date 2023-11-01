-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ENTRY', 'BAD');

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "hr" INTEGER NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'ENTRY',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
