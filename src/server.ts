import express from "express"
import compression from "compression"
import cors from "cors"
import { createServer } from "http";

const app = express();
app.use("*", cors());
app.use(compression());

app.get("/", (req, res) => {
    res.send("Hola con graphql")
})

const httpServer = createServer(app);

const PORT = 5300
httpServer.listen({
    port: PORT
},
    () => console.log(`Funcionando en http://localhost:${PORT}`)
)