const {buildSchema} = require('graphql')

const scheme = buildSchema(`
    type User {
        id: ID
        username: String
        password: String
        followed: [User]
        avatarUrl: String
        status: String
    }
    
    input UserInput {
        id: ID
        username: String!
        password: String!
    }
    
    type AuthData {
        id: ID!
        token: String!
        tokenExpiration: Int!
        username: String
    }
    
    input LoginInput {
        username: String!
        password: String!
    }
    
    type AuthMe {
        id: ID
        isAuth: Boolean!
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        login(username: String!, password: String!): AuthData!
        authMe: AuthMe
    }
    
    type Mutation {
        createUser(input: UserInput): User
        removeUser(id: ID): Boolean
        follow(id: ID): Boolean
        unfollow(id: ID): Boolean
    }
    
`)

module.exports = scheme