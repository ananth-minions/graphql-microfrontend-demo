import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "content", url: "http://content:4000" },
    { name: "search", url: "http://search:4000" },
    { name: "book", url: "http://book:4000" }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({ schema, executor });
  server.listen();
})();
