import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/combinedTypes';
import resolvers from './graphql/combinedResolvers';
import models from './models';
import { port } from './config';
import { getUser } from './utils';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    authScope: await getUser(req.headers.authorization),
    models,
  }),
});
const app = express();

server.applyMiddleware({ app });
models.sequelize.authenticate();

models.sequelize.sync();

app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
