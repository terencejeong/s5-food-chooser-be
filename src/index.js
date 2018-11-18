import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './graphQLSchema';
import { connect } from './db/index';
import { router } from './router';
const dotenv = require('dotenv');
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
connect();

//routes
router(app);

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
