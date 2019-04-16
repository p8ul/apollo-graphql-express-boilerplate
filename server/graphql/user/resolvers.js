import { encryptPassword, authenticate, generateToken } from '../../utils';
// eslint-disable-next-line
import { Post } from '../../models';

const userResolvers = {
  User: {
    posts: async ({ id }) => Post.findAll({ where: { UserId: id } }),
  },
  Query: {
    users: async (root, args, { models: { User } }) => User.findAll(),
    user: async (root, { id }, { models: { User } }) => User.findByPk(id),
  },
  Mutation: {
    register: async (root, { name, email, password }, { models: { User } }) => {
      try {
        const user = await User.create({
          name,
          email,
          password: encryptPassword(password),
        });
        return {
          token: generateToken(user),
        };
      } catch (error) {
        throw new Error(error.errors[0].message);
      }
    },
    login: async (root, { email, password }, { models: { User } }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      const correctPassword = authenticate(password, user.password);

      if (!correctPassword) {
        throw new Error('Invalid email or password');
      }
      return {
        token: generateToken(user),
      };
    },
    updateUser: async (root, { id, name }, { models: { User } }) => User.update({
      name,
    }, {
      returning: true,
      where: {
        id,
      },
    }).then(([rowsUpdate, [updated]]) => (rowsUpdate ? updated.dataValues : {})),
    deleteUser: async (root, { id }, { models: { User }, authScope }) => {
      if (authScope.user === null || id !== authScope.user.id) {
        throw new Error('You cannot delete this user account!');
      }
      User.destroy({
        where: {
          id,
        },
      });
    },
  },

};

export default userResolvers;
