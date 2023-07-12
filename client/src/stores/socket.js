import { writable } from "svelte/store"
import { io } from "socket.io-client"

const createSocketServer = ()=>{

    const {subscribe, update, set} = writable()
    
    return {
        subscribe,
        socketSet:({socket})=>{
            set(socket)
        },
        chatMessage:({message, user})=>{
            update((socket)=>{
                socket.emit('chat message', {message, user})
                return socket
            })
        },
        startGame:()=>{
            update((socket)=>{
                socket.emit('start game')
                return socket
            })
        },
        movePiece:(table)=>{
            update((socket)=>{
                socket.emit('move piece', table)
                return socket
            })
        },
        reset:()=>{
            set()
        }
    }
}

export const socketServerStore = createSocketServer()