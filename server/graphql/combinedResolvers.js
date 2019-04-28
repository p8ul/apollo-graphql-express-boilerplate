import userResolvers from './user/resolvers';
import postResolvers from './post/resolvers';
import { dateScalarType } from './scalars';

export default [dateScalarType, userResolvers, postResolvers];
