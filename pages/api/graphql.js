import { ApolloServer } from "apollo-server-micro";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";

import { typeDefsSAPGeneral } from "graphql/schemas/sapGeneral";
import { sapGeneralResolvers } from "graphql/resolvers/sapGeneral";
import "db/config";

const apolloServer = new ApolloServer({
  typeDefs: [typeDefsSAPGeneral],
  resolvers: [sapGeneralResolvers],
  plugins: [
    process.env.ENVIRONMENT === "production"
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: "my-graph-id@my-graph-variant",
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
