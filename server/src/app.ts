import express from 'express'
import http from 'http'
// import socketIO from 'socket.io'
const socketIO = require('socket.io')

import morgan from 'morgan'
// import pkg from '../package.json'
import './db'
import router from './routers'

import serverSocket from './sockets/serverSocket'


const app = express()
const server = http.createServer(app)
const io = socketIO(server)

// app.set('pkg', pkg);
app.use(express.json({ limit: '50mb'}))
app.use(morgan('dev'))
// app.get('/', (_req:any, res:any) => {
//   return res.status(200).json({
//     author: app.get('pkg').author,
//     description: app.get('pkg').description,
//     version: app.get('pkg').version
//   });
// });

app.use('/api', router)

serverSocket(io.of('/server/1'))
serverSocket(io.of('/server/2'))

export default app