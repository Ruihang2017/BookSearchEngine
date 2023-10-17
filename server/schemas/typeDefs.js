const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: String
        description: String!
        bookId: Int!
        image: String
        link: String
        title: String!
    }

    type Query {
        user: [User]
    }
`

module.exports = typeDefs;