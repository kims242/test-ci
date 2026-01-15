import prismaMock from './tests/prisma-mock';

jest.mock('../../prisma/client', () => ({
  __esModule: true,
  default: prismaMock,
}));
