import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const prismaMock = mockDeep<PrismaClient>() as unknown as DeepMockProxy<PrismaClient>;
export default prismaMock;

const mockedArticleResponse = {
  id: 'article-1',
  title: 'Test Article',
  content: 'Content',
  _count: { favoritedBy: 0 }, // <- essentiel
  favoritedBy: [], // si utilisé
};
prismaMock.article.update.mockResolvedValue(mockedArticleResponse);

