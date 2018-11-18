import { gql } from 'apollo-server-express';
import columnSchema from './column';
import defaultSchema from './default';
import userSchema from './user';
import voteListSchema from './voteList';

const linkSchema = gql`
  type Query {
    _: Boolean
  } 
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  columnSchema,
  voteListSchema,
  defaultSchema,
  userSchema
]
