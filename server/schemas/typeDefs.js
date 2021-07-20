const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Power {
        _id: ID 
        powerName: String
        powerLevel: Int
    }

    type User {
        _id: ID
        username: String
        characterName: String
        email: String
        power: [Power]
    }

    type Query {
        users: [User]
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
    }

    type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;