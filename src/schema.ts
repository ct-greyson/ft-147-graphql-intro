// 5 graphql data types: Int, Float, String, Boolean, ID

export const typeDefs = `#graphql
    type Game {
        # ID type ensures id is unique
        # ! means data is required
        id: ID!
        title: String!
        # String! inside the array indicates that at least one single entry is required inside the array
        # []! outside the array requires the array to exist in the first place
        platform: [String!]!
        # games can have multiple reviews but are not required to have any reviews
        reviews: [Review!]
    },
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    },
    type Review {
        id: ID!
        rating: Int!
        content: String!
        # Associating game/author with respective review
        # allows us to query game/author data with our review
        game: Game!
        author: Author!
    }
    # ALWAYS need a type Query for our data in our schema
    # defines the entry point for our data and specifies the return type
    # they match up with our resolvers
    type Query {
        # returns every game in database
        # makes sure we return an array of type Game (or a Game array)
        games: [Game]
        authors: [Author]
        reviews: [Review]
        # get a specific game by ID
        game(id: ID!): Game
        author(id: ID!): Author
        review(id: ID!): Review
    }
    # allow us to manipulate data
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, updates: UpdateGameInput!): Game
    }
    # creates a custom input type
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }

    input UpdateGameInput {
        title: String!
        platform: [String!]
    }
`