class UserController {
    /**
     *
     * @param {import('socket.io').Server} io
     */
    constructor(io) {
        this.io = io
    }

    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    registerUser(req, res) {
        const msg = {
            message: 'ok',
            data: {
                username: 'realshit!?',
            },
            error: '',
        }
        this.io.sockets.emit('user:created', msg)
        res.json(msg)
    }
}

export default UserController
