import { writable } from "svelte/store"

const createPlayer = ({name, color})=>{
    const { subscribe, update, set } = writable({
        name,
        color,
    })

    return {
        subscribe,

    }
}

// export const playerStore = createPlayer({name:'Rhm', color:''})