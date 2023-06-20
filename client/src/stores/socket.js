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
            subscribe((socket)=>{
                socket.emit('chat message', {message, user})
            })
        },
        startGame:()=>{
            subscribe((socket)=>{
                socket.emit('start game')
            })
        },
        movePiece:(table)=>{
            subscribe((socket)=>{
                socket.emit('move piece', table)
            })
        },
        reset:()=>{
            set()
        }
    }
}

export const socketServerStore = createSocketServer()