
const serverSocket = (io:any)=>{
    // console.log({io})
    io.on('connection', (socket:any)=>{
        // console.log(io)
        console.log('Un nuevo cliente se ha conectado a la sala de chat')

        // Manejar eventos de la sala de chat
        socket.on('chat message', (message:any)=>{
            
            // Enviar mensaje a todos los clientes conectados en la sala de chat
            console.log(message)
            io.emit('chat message', message);
        });

        socket.on('disconnect', ()=>{
            console.log('Un cliente se ha desconectado')
        })
    })
    // console.log('Termine en socket io')
}

export default serverSocket;