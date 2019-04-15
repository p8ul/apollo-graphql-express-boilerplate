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

### testing
* run `yarn test`
