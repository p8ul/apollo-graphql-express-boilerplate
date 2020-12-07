[![Coverage Status](https://coveralls.io/repos/github/p8ul/apollo-graphql-express-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/p8ul/apollo-graphql-express-boilerplate?branch=master)
[![Build Status](https://travis-ci.org/p8ul/apollo-graphql-express-boilerplate.svg?branch=master)](https://travis-ci.org/p8ul/apollo-graphql-express-boilerplate)
# apollo-graphql-express-boilerplate
A GraphQL with Apollo, Express and PostgreSQL boilerplate project.

# Features 
- Apollo-server
    - Queries, Mutations, Subscriptions, Error Handling, Playground, Custom Scalars, Authentication, Integration Testing, Schema directives
- Authentication
    - powered by JWT
    - Sign Up, Sign In
- PostgreSQL Database with Sequelize
    - entities: Users & Posts
- Authorization
    - protected resolvers
- Testing

# Stack
- Node.js
- Express
- PostgreSQL
- Sequelize
- apollo-server-express
- JWT authentication
- Jest
- Eslint

## Installation
* `git clone https://github.com/p8ul/apollo-graphql-express-boilerplate.git`
* `cd apollo-graphql-express-boilerplate`
* `yarn`
* start PostgreSQL database
* `create two databases for testing and development`
* `create a .env file and copy the keys from .env.example file`

```cp .env.example .env```

```bash
    # Your Graphql Port
    PORT=4000
    # Decoding Secret
    SECRET="awesome_secret"
    DATABASE_NAME= # the name of the PostgreSQL database
    DATABASE_USERNAME= # username  of the PostgreSQL database
    DATABASE_PASSWORD= # password of the username
    TEST_DATABASE_NAME= # test database name
```

### Running the app
* `yarn start`
* navigate to `http://localhost:4000/graphql`

### Playground
- Open your browser to this address: http://localhost:4000 and run the available commands:
1. Sign Up
```graphQL
mutation {
  register(name: "admin", email: "admin@example.com", password: "123456") {
    token
  }
}
```

2. Login

```graphQL
mutation {
  login(email: "admin@example.com", password: "123456") {
    token
  }
}
```

3. List Users

```graphQL
query {
  users {
    email
    name
    id
  }
}
```

4. Add Post
```graphQL
mutation {
  addPost(
    title: "Combo House"
    body: "this is a post body"
    file: "http://modern.realhomes.io/wp-content/uploads/2015/07/property-10-exterior-680x510.jpg"
  ) {
    title
  }
}
```

5. List Post
```graphQL
query {
  posts{
    title
    id
    file
  }
}
```

6. Post added subscription
```graphQL
subscription {
  postAdded {
    title
    body
    file
  }
}
```
More Schemas..
![Schemas](/screenshots/schema.png?raw=true "Screenshot")

### testing
* run `yarn test`
