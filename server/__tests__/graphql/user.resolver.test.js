import models from '../../models';
import { context, faker } from '../base';
import userResolvers from '../../graphql/user/resolvers';
import { getUser } from '../../utils';

describe('userResolver', () => {
  let userDetails;
  let _;
  // eslint-disable-next-line
  let __;
  let ctx;

  beforeEach(async () => {
    await models.Post.destroy({ truncate: {} });
    await models.User.destroy({ truncate: {} });
    ctx = await context();
    const { authScope: { user } } = ctx;
    userDetails = user;
  });

  it('should list users', async () => {
    const result = await userResolvers.Query.users(_, __, ctx);
    expect(result[0]).toHaveProperty('name');
  });

  it('should retrieve a user', async () => {
    const result = await userResolvers.Query.user(_, { id: userDetails.id }, ctx);
    expect(result.name).toEqual(userDetails.name);
  });

  it('should update a user', async () => {
    const data = {
      name: `${faker.name.firstName()}-${faker.random.uuid()}`,
      email: `email${faker.random.uuid()}@example.com`,
      password: faker.internet.password(),
    };
    await userResolvers.Mutation.register(_, data, ctx);
    const { authScope: { user } } = ctx;
    userDetails = user;
    const result = await userResolvers.Mutation.updateUser(_, { id: userDetails.id, name: 'john' }, ctx);
    expect(result.name).toEqual('john');
  });

  it('should delete a user', async () => {
    const result = await userResolvers.Mutation.deleteUser(_, { id: userDetails.id }, ctx);
    expect(result).toEqual(undefined);
  });

  it('should not delete another user account', async () => {
    try {
      await userResolvers.Mutation.deleteUser(
        _, { id: userDetails.id }, { models, authScope: { user: null } },
      );
    } catch (error) {
      expect(error.message).toBe('You cannot delete this user account!');
    }
  });

  it('should create a user', async () => {
    const data = {
      name: `${faker.name.firstName()}-${faker.random.uuid()}`,
      email: `email${faker.random.uuid()}@example.com`,
      password: faker.internet.password(),
    };
    const result = await userResolvers.Mutation.register(_, data, ctx);
    expect(result).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const result = await userResolvers.Mutation.login(_, { email: userDetails.email, password: '123456' }, ctx);
    expect(result).toHaveProperty('token');
  });

  it('should not login with invalid credentials', async () => {
    try {
      await userResolvers.Mutation.login(_, { email: userDetails.email }, ctx);
    } catch (error) {
      expect(error.message).toBe('Invalid email or password');
    }
    try {
      await userResolvers.Mutation.login(_, { email: 'userDetails.emai' }, ctx);
    } catch (error) {
      expect(error.message).toBe('Invalid email or password');
    }
  });

  it('should get logged in user from the token', async () => {
    const result = await userResolvers.Mutation.login(_, { email: userDetails.email, password: '123456' }, ctx);
    const user = await getUser(result.token);
    expect(user.user.email).toEqual(userDetails.email);
  });
});
