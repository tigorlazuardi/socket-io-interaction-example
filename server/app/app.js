//@ts-check
import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import registerRoutes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(cors())

const server = http.createServer(app)
const port = 3000
server.listen(port, () => {
    console.log('server running on port', port)
})
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:8080',
    },
})

registerRoutes(app, io)

export default {}
