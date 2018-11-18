import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
   users: [User!]   
  }
  type User {
      id: ID!
      username: String!
      content: String!
  }
`;
