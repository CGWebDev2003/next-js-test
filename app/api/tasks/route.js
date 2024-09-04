// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const tasks = await prisma.task.findMany();
//     res.status(200).json(tasks);
//   } else if (req.method === 'POST') {
//     const { title } = req.body;
//     console.log({ title });
//     const task = await prisma.task.create({
//       data: { title },
//     });
//     res.status(201).json(task);
//   }
// }

export default async function POST(req, res) {
  if (req.method === 'POST') {
    // Füge hier die Logik zum Verarbeiten der POST-Anfrage hinzu
    const { title } = req.body;

    // Hier könnte der Code zum Speichern der Aufgabe in einer Datenbank kommen
    console.log(title);

    res.status(200).json({ message: 'Task added successfully' });
  } else {
    // Wenn die Methode nicht erlaubt ist, gib eine 405-Fehlermeldung zurück
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}