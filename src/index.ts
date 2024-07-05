import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const server = new ApolloServer({
    // typeDefs - our schema.  the definitions of types for our data
    typeDefs,
    // resolvers - functions that handle incoming requests and return data (functionality for our queries/mutations)
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}, 
})

console.log(`Server ready at ${url}`)