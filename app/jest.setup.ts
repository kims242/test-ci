import prismaMock from './prisma/prisma-mock';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => prismaMock),
  };
});
