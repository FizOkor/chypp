import 'dotenv/config'
import ViteExpress from 'vite-express'
import express from 'express'
import { createServer } from 'http'

export const app = express()
export const server = createServer(app);

const port: string = process.env.PORT || '3000';

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("src/client/assets"));
}

app.use(express.urlencoded({extended: true}))
app.use(express.json());

server.listen( port, () => console.log("Server is lisening on port 3000..."))
ViteExpress.bind(app, server)