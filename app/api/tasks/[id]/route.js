import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { completed } = req.body;
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { completed },
    });
    res.status(200).json(task);
  }
}