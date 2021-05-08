//@ts-check
import express from 'express'
import UserController from '../../../controller/user.js'

/**
 *
 * @param {import('express').Router} router
 * @param {import('socket.io').Server} io
 */
function registerUserRoutes(router, io) {
    const subrouter = express.Router()
    const controller = new UserController(io)

    // `this` parameter in the UserController code is absent when called by express because of missing context.
    // Express only knows the function definition, but it does not call the method from the class instance, hence missing context.
    // So we have to bind the controller instance to `this` parameter explicitly.
    // Does not apply to static since they don't have access to `this` anyway.
    subrouter.get('/', controller.registerUser.bind(controller))
    router.use('/user', subrouter)
}

export default registerUserRoutes
