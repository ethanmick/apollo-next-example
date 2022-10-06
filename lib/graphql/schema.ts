import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    example(id: Int!): Example!
  }

  type Example {
    name: String!
  }
`
