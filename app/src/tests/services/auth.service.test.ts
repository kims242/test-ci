import prismaMock from '../prisma-mock';
import { createUser, login } from '../../app/routes/auth/auth.service';

describe('AuthService', () => {
  test('createUser should return created user', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);

    prismaMock.user.create.mockResolvedValue({
      id: 1,
      username: 'TestUser',
      email: 'test@me',
      bio: null,
      image: null,
    } as any);

    const result = await createUser({
      username: 'TestUser',
      email: 'test@me',
      password: '1234',
    });

    expect(result).toHaveProperty('username', 'TestUser');
    expect(result).toHaveProperty('token');
  });

  test('login should return existing user', async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: 1,
      username: 'TestUser',
      email: 'test@me',
      password: await require('bcryptjs').hash('1234', 10),
      bio: null,
      image: null,
    } as any);

    const result = await login({
      email: 'test@me',
      password: '1234',
    });

    expect(result).toHaveProperty('email', 'test@me');
    expect(result).toHaveProperty('token');
  });
});
