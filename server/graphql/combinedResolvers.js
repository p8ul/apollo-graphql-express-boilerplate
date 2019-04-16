import { GraphQLScalarType, Kind } from 'graphql';
import moment from 'moment';
import userResolvers from './user/resolvers';
import postResolvers from './post/resolvers';

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return moment(value).format('MMMM Do YYYY'); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

export default [resolvers, userResolvers, postResolvers];
