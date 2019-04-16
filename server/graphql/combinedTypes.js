// @flow
import { gql } from 'apollo-server-express';
import userTypes from './user/types';
import postTypes from './post/types';


const queryTypes = gql`
  scalar Date
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const combinedTypes = [userTypes, postTypes, queryTypes];

export default combinedTypes;
