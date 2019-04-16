import { gql } from 'apollo-server-express';

const postTypes = gql`    
    type Post {
        id: Int!
        title: String!
        body: String!
        user: User
        createdAt: Date
    }
    type PostConnection {
        count: Int
        posts: [Post]
    }

    extend type Query {
        posts: [Post!]
        getPost(id: Int!): Post
    }
    
    extend type Mutation {
        addPost(title: String!, body: String!): Post
        updatePost(title: String!, body:String!, id: Int!): Post  
        deletePost(id: Int!): PostConnection 
    }
`;

export default postTypes;
