import express from "express"
import compression from "compression"
import cors from "cors"
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express"
import schema from "./schema"
import expressPlayGround from "graphql-playground-middleware-express"

const app = express();
app.use("*", cors());
app.use(compression());

const servivor = new ApolloServer({
    schema,
    introspection: true

})

servivor.applyMiddleware({ app });
app.get("/", expressPlayGround({
    endpoint: '/graphql'
}))

const httpServer = createServer(app);

const PORT = 5300
httpServer.listen({
    port: PORT
},
    () => console.log(`Funcionando en http://localhost:${PORT}`)
)