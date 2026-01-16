import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const prismaMock = mockDeep<PrismaClient>() as unknown as DeepMockProxy<PrismaClient>;
export default prismaMock;

const mockedArticleResponse = {
  id: 'article-1',
  title: 'Test Article',
  content: 'Lorem ipsum',
  slug: 'test-article',
  author: {
    id: 1,
    username: 'testuser',
    bio: null,
    image: null,
    followedBy: [],
  },
  tagList: [],
  favoritedBy: [],
  _count: { favoritedBy: 0, comments: 0 },
};
prismaMock.article.update.mockResolvedValue(mockedArticleResponse);

