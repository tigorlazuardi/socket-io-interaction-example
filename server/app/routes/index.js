import express from 'express'
import registerUserRoutes from './user/index.js'
/**
 *
 * @param {import('express').Express} app
 * @param {import('socket.io').Server} io
 */
function registerRoutes(app, io) {
    io.on('connection', (socket) => {
        socket.emit('init', 'connected to server socket.io')
    })
    const router = express.Router()

    router.get('/', (req, res) => {
        res.json({
            message: 'ok',
            data: {},
            error: '',
        })
    })

    registerUserRoutes(router, io)
    app.use(router)
}

export default registerRoutes
