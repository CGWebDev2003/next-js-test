
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Hier initiale Aufgaben erstellen
  await prisma.task.createMany({
    data: [
      { title: 'Aufgabe 1', completed: false },
      { title: 'Aufgabe 2', completed: true },
      { title: 'Aufgabe 3', completed: false },
    ],
  });

  console.log('Daten wurden eingefügt.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });