import axios from 'axios'
import { io } from 'socket.io-client'

document.addEventListener('DOMContentLoaded', (event) => {
    addText()
    initateSocket()
})

function addText() {
    const h1 = document.createElement('h1')
    h1.innerText = 'Inspect and look at console'
    document.body.appendChild(h1)
}

function initateSocket() {
    const socket = io('http://localhost:3000')
    socket.on('init', async (message) => {
        console.log(message)
        const res = await axios.get('http://localhost:3000/user')
        console.log('http axios request => ', res.data)
    })
    socket.on('user:created', (payload) => {
        console.log('incoming message from socket =>', payload)
    })
}
