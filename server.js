const express = require("express");
const path = require("path");

const { graphqlHTTP } = require("express-graphql");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const schemaArray = loadFilesSync(path.join(__dirname, "**/*.schema.graphql"));

const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
const app = express();

const schema = makeExecutableSchema({
  typeDefs: schemaArray,
  resolvers: resolversArray,
});

const PORT = process.env.PORT || 8000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Running GraphQL server on ${PORT}`);
});
