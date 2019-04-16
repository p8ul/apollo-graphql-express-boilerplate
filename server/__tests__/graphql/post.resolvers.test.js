import models from '../../models';
import { faker } from '../base';
import postResolvers from '../../graphql/post/resolvers';
import { encryptPassword } from '../../utils';

const createUser = async () => {
  const user = await models.User.create({
    name: `${faker.name.firstName()}-${faker.random.uuid()}`,
    email: `email-${faker.random.uuid()}@example.com`,
    password: encryptPassword('123456'),
  });
  return user;
};
const context = async () => ({ models, authScope: { user: await createUser() } });

describe('postResolvers', () => {
  let post;
  let _;
  // eslint-disable-next-line
  let __;
  let ctx;

  beforeEach(async () => {
    await models.Post.destroy({ truncate: {} });
    ctx = await context();
    post = await models.Post.create({ title: 'title', body: 'body', UserId: ctx.authScope.user.id });
  });

  it('should list posts', async () => {
    const result = await postResolvers.Query.posts(_, __, ctx);
    expect(result[0].title).toEqual(post.title);
  });

  it('should retrieve a post', async () => {
    const result = await postResolvers.Query.getPost(_, { id: post.id }, ctx);
    expect(result.title).toEqual(post.title);
  });

  it('should update a post', async () => {
    const result = await postResolvers.Mutation.updatePost(_, { id: post.id, title: 'new title' }, ctx);
    expect(result.title).toEqual('new title');
  });

  it('should delete a post', async () => {
    const result = await postResolvers.Mutation.deletePost(_, { id: post.id }, ctx);
    expect(result).toEqual(1);
  });

  it('should create a post', async () => {
    const result = await postResolvers.Mutation.addPost(_, { body: 'body', title: 'new title' }, ctx);
    expect(result.title).toEqual('new title');
  });

  it('should not create a post if user is not authenticated', async () => {
    try {
      await postResolvers.Mutation.addPost(_, { body: 'body', title: 'new title' }, { models, authScope: { user: null } });
    } catch (error) {
      expect(error.message).toBe('You must be logged in!');
    }
  });
});
