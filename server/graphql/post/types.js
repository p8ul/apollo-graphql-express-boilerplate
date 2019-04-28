import { gql } from 'apollo-server-express';

const postTypes = gql` 
    type Subscription {
        posts: PostConnection
    } 

    type Post {
        id: Int
        title: String! @capitalize
        body: String!
        user: User
        file: String
        createdAt: Date @date(defaultFormat: "MMMM Do YYYY")
    }

    type PostConnection {
        endCursor: Int
        edges: [Post]
    }

    extend type Query {
        posts(cursor: String, limit: Int): PostConnection
        getPost(id: Int!): Post
    }

    extend type Mutation {
        addPost(title: String!, body: String!, file: String): Post
        updatePost(title: String!, body:String!, id: Int!): Post  
        deletePost(id: Int!): PostConnection 
    }
`;

export default postTypes;
