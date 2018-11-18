import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
   voteList: [VoteList!]   
  }
  type VoteList {
      id: ID!
      columnOrder: [String]
      users: [User!]
      columns: [Columns!]
  }
`;
