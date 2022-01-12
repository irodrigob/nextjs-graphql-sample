import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "graphql/schemas";
import { resolvers } from "graphql/resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
