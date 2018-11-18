import { gql } from 'apollo-server-express';

export default gql`
    type Columns {
        id: ID!
        userNames: [String!]
        columnName: String!,
        title: String!
    }
`
