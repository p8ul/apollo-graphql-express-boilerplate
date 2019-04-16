[![Coverage Status](https://coveralls.io/repos/github/p8ul/apollo-graphql-express-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/p8ul/apollo-graphql-express-boilerplate?branch=master)
[![Build Status](https://travis-ci.org/p8ul/apollo-graphql-express-boilerplate.svg?branch=master)](https://travis-ci.org/p8ul/apollo-graphql-express-boilerplate)
# apollo-graphql-express-boilerplate
A GraphQL with Apollo, Express and PostgreSQL boilerplate project.

# Stack
- Node.js
- Express
- PostgreSQL
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

### testing
* run `yarn test`
