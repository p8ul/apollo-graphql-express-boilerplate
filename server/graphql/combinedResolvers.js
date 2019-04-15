import userResolvers from './user/resolvers';
import postResolvers from './post/resolvers';

const combinedResolvers = {
  Query: {
    users: userResolvers.list,
    user: userResolvers.retrieve,

    // posts
    posts: postResolvers.list,
    getPost: postResolvers.retrieve,

  },
  Mutation: {
    register: userResolvers.create,
    login: userResolvers.login,
    deleteUser: userResolvers.delete,
    updateUser: userResolvers.update,

    // posts
    addPost: postResolvers.create,
    updatePost: postResolvers.update,
    deletePost: postResolvers.delete,
  },
  Post: postResolvers.Post,
  User: userResolvers.User,
};

export default combinedResolvers;
