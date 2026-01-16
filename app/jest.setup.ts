import prismaMock from './prisma/prisma-mock';

jest.mock('../../prisma/client', () => ({
  __esModule: true,
  default: prismaMock,
}));
