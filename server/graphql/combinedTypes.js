// @flow
import { gql } from 'apollo-server-express';
import userTypes from './user/types';
import postTypes from './post/types';


const queryTypes = gql`
  type Query {
    user(id: ID!): User
    users: [User!]
    posts: [Post!]
    getPost(id: Int!): Post
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): UserAuth
    login(email: String!, password: String!): UserAuth
    deleteUser(id: Int!): UserConnection
    updateUser(id: Int!, name: String!): User
    addPost(title: String!, body: String!): Post
    updatePost(title: String!, body:String!, id: Int!): Post  
    deletePost(id: Int!): PostConnection  
  }
`;

const combinedTypes = [userTypes, postTypes, queryTypes];

export default combinedTypes;
