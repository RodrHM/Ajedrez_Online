
const serverSocket = (io:any)=>{
    io.on('connection', (socket:any)=>{
        console.log(io)
        console.log('Un nuevo cliente se ha conectado a la sala de chat')

        // Manejar eventos de la sala de chat
        socket.on('chat message', (message:any)=>{
            
            // Enviar mensaje a todos los clientes conectados en la sala de chat
            io.emit('chat message', message);
        });

        socket.on('sisconnect', (aux:any)=>{
            console.log({aux})
            console.log('Un cliente se ha desconectado')
        })
    })
}

export default serverSocket;