import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import morgan from "morgan";

import { RedAlertRessolver } from "./resolvers/redAlert";

const main = async () => {
  const app = express();

  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  app.use(morgan("short"));

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RedAlertRessolver],
    }),
  });

  await server.applyMiddleware({ app, cors: false });

  app.listen(5000, () => {
    console.log("Server started on: http://localhost:5000");
  });
};

main();
