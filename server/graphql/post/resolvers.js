// eslint-disable-next-line
import { User } from '../../models';

const postResolvers = {
  Post: {
    user: async ({ user }) => User.findOne({ _id: user }),
  },
  Query: {
    posts: async (root, args, { models: { Post } }) => Post.findAll({
      order: [['id', 'DESC']],
    }),
    getPost: async (root, { id }, { models: { Post } }) => Post.findByPk(id),
  },
  Mutation: {
    addPost: async (root, { title, body }, { models: { Post }, authScope }) => {
      if (authScope.user === null) {
        throw new Error('You must be logged in!');
      }
      try {
        const post = await Post.create({ title, body, UserId: authScope.user.id });
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePost: async (root, { id, title, body }, { models: { Post } }) => Post.update({
      title, body,
    }, {
      returning: true,
      where: {
        id,
      },
    }).then(([rowsUpdate, [updated]]) => (rowsUpdate ? updated.dataValues : {})),
    deletePost: async (root, { id }, { models: { Post } }) => Post.destroy({
      where: {
        id,
      },
    }),
  },
};

export default postResolvers;
