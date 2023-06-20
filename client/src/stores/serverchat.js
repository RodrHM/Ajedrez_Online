import { writable } from "svelte/store";


const createChat = ()=>{
    const { subscribe, update, set } = writable([{message:'Primer mensaje', user:{name:'', color:'black'}}])

    return {
        subscribe,
        sendMessage:({message, user})=>{
            console.log({message, user})
            update( chat => {
                // console.log(chat)
                // chat = [...chat, {message, user}]
                // console.log(chat)
                chat.push({message, user})
                return chat
            })
        },
        reset:()=>{
            set([])
        }
    }
}

export const chatStore = createChat()