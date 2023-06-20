import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import morgan from 'morgan'
import './db'
import router from './routers'
import cors from 'cors'
import serverSocket from './sockets/serverSocket'


const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
})

app.use(cors({origin:'http://localhost:3001'}))
// app.set('port', process.env.PORT || 3001)
app.use(express.json({ limit: '50mb'}))
app.use(morgan('dev'))

app.use('/api', router)


// io.on('connection', (socket)=>{
//     console.log('Un nuevo cliente se ha conectado a la sala de chat')
    
//     // Manejar eventos de la sala de chat
//     socket.on('chat message', (message)=>{
//         // console.log()
//         // Enviar mensaje a todos los clientes conectados en la sala de chat
//         io.emit('chat message', message);
//     });
    
//     socket.on('disconnect', (aux)=>{
//         console.log({aux})
//         console.log('Un cliente se ha desconectado')
//     })
// })
serverSocket(io.of('/api/server/1'), "1")
serverSocket(io.of('/api/server/2'), "2")
serverSocket(io.of('/api/server/3'), "3")
serverSocket(io.of('/api/server/4'), "4")
serverSocket(io.of('/api/server/5'), "5")
serverSocket(io.of('/api/server/6'), "6")

export default httpServer