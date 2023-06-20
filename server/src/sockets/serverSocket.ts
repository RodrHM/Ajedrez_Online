import { ServerDB, User } from "../types.d"


const dataBaseUser:User[] = [
    {
        _id:'user_one',
        name:'Cosme Fulanito',
        email:'',
        color:'white',
        performance:{
          games:29,
          victories:7,
          defeats:1,
          draw:0,
        },
        statistics:{
          gamesAverage:"50%",
          victoriesAverage:"90%",
          defeatsAverage:"75%",
        },
    },
    {
      _id:'user_two',
      name:'Tipo de Tal',
      email:'',
      color:'black',
      performance:{
        games:37,
        victories:15,
        defeats:0,
        draw:79,
      },
      statistics:{
        gamesAverage:"50%",
        victoriesAverage:"90%",
        defeatsAverage:"75%",
      },
    }
]

  let count = 0

  

const serverSocket = (io:any, id_server:string)=>{
    // console.log({io})
    let serverDB:ServerDB = {
      "id_server":id_server,
      "name":"Sala " + id_server,
      "players":[],
      "table":[],
      "state":"entry",
      "private":[],
      "history":[],
      "turn":"",
      "whiteDead":[],
      "blackDead":[],
      "chat":[],
      "viewers":[]
  }
    io.on('connection', (socket:any)=>{
        // console.log(io.name)
        serverDB.players.push(dataBaseUser[count])
        socket.emit('set user', dataBaseUser[count])
        console.log('El cliente numero', count, 'se ha conectado a la sala de chat', io.name)
        count++

        if(false) {
          socket.emit("set server", serverDB)
        }

        // Manejar eventos de la sala de chat
        socket.on('chat message', (message:any)=>{
            // Enviar mensaje a todos los clientes conectados en la sala de chat
            io.emit('chat message', message);
        });

        socket.on('start game', ()=>{
            // Enviar mensaje a todos los clientes conectados en la sala de chat
            io.emit('start game');
        });

        socket.on('move piece', (fromTo:any)=>{
            // MODIFICAMOS EL OBJETO serverDB.table CON LOS DATOS fromTo Y LOS GUARDAMOS PARA CUANDO ALGUIEN SE CONECTE

            // GUARDAMOS LOS MOVIMIENTOS EL OBJETO serverDB.history

            // ENVIAMOS LOS DATOS PARA AL CIIENTE PARA QUE MODIFIQUE SU TABLERO
            io.emit('move piece', fromTo);
        });

        socket.on('disconnect', ()=>{
            count--;

            // SI NO QUEDA NADIE EN EL SERVIDOR, REESTABLESEMOS LOS VALORES PREDETERMINADOS DEL SERVIDOR
            console.log('Un cliente se ha desconectado')
        })
    })
    // console.log('Termine en socket io')
}

export default serverSocket;