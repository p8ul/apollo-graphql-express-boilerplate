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
`;

export default userType;
