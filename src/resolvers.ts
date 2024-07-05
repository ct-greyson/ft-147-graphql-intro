import db from "./db.js";

export const resolvers = {
  Query: {
    // games resolver
    // return all of the games in the db when user selects the games query
    // naming should map up with schema in type Query
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    // arguments for resolvers
    // parent, args, context
    // _ (underscore) helps us skip over parameters
    // our args will be our id
    game(_: any, args: { id: string }) {
      // go through db.games and get the game with the specific id that we passed in
      return db.games.find((game) => game.id === args.id);
    },
    author(_: any, args: { id: string }) {
      return db.authors.find((author) => author.id === args.id);
    },
    review(_: any, args: { id: string }) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  // Nested Resolvers for queries that are inside (nested) other queries

  // setting up a nested resolver for the Game type
  // parent in this case refers to the Game id
  Game: {
    reviews(parent: { id: string }) {
      return db.reviews.filter((review) => parent.id === review.game_id);
    },
  },
  Author: {
    reviews(parent: { id: string }) {
      return db.reviews.filter((review) => parent.id === review.author_id);
    },
  },
  Review: {
    game(parent: { game_id: string }) {
      return db.games.find((game) => game.id === parent.game_id);
    },
    author(parent: { author_id: string }) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
  },
  Mutation: {
    addGame(_: any, args: { game: { title: string; platform: string[] } }) {
        // create a new game variable
        let game = {
            ...args.game,
            // the long way
            // title: args.game.title,
            // platform: args.game.platform,
            id: String(Date.now())
        }
        // add the game to our games list
        db.games.push(game);
        // return the game we just created
        return game
    },
    deleteGame(_: any, args: { id: string }){
        db.games = db.games.filter((game) => args.id !== game.id)
        return db.games
    },
    updateGame(_: any, args: {id: string, updates: { title: string, platform: string[]}}){
        // find game to update and update it
        // need to map in order to modify the data inside the array
        db.games = db.games.map((game) => {
            if(game.id === args.id){
                // update game, use spread syntax to overwrite old values with new values
                game = {...game, ...args.updates}
            }
            return game;
        })

        return db.games.find((game) => game.id === args.id)
    }
  },
};
