import { makeExecutableSchema } from "graphql-tools";

import { typeDefsSAPGeneral } from "graphql/schemas/sapGeneral";
import { sapGeneralResolvers } from "graphql/resolvers/sapGeneral";

export const schema = makeExecutableSchema({
  typeDefs: [typeDefsSAPGeneral],
  resolvers: [sapGeneralResolvers],
});
