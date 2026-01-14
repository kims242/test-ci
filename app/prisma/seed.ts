import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  await prisma.user.create({
    data: {
      username: 'RealWorld',
      email: 'realworld@me',
      bio: null,
      image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
      password: hashedPassword,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
