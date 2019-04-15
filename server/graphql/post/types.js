import { gql } from 'apollo-server-express';

const postTypes = gql`
    type Post {
        id: Int!
        title: String!
        body: String!
        user: User
    }
    type PostConnection {
        count: Int
        posts: [Post]
    }
`;

export default postTypes;
