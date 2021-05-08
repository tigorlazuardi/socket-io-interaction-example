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
        // `this` here will be missing when called by express. Use `bind` on router to make sure `this` exist.
        this.io.sockets.emit('user:created', msg)
        res.json(msg)
    }
}

export default UserController
