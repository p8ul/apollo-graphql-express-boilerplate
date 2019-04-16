import { gql } from 'apollo-server-express';

const userType = gql`
  type User {
    id: String
    name: String
    email: String
    active: Boolean
    posts: [Post]
  }
  type UserConnection {
    count: Int
    users: [User]
  }
  type UserAuth {
    token: String
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]
  }

  extend type Mutation {
    register(name: String!, email: String!, password: String!): UserAuth
    login(email: String!, password: String!): UserAuth
    deleteUser(id: Int!): UserConnection
    updateUser(id: Int!, name: String!): User
  }
`;

export default userType;
