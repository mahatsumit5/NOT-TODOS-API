import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createTask({ task, hr }) {
  return await prisma.task.create({
    data: {
      task: task,
      hr: hr,
    },
  });
}

export async function readtasks() {
  return await prisma.task.findMany();
}

export async function updateTask(id, type) {
  return await prisma.task.update({
    where: { id: id },
    data: { type: type },
  });
}

export async function deleteTask(ids) {
  console.log(ids);
  return await prisma.task.delete({
    where: { id: ids },
  });
}
