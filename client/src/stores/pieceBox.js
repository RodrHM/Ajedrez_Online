import { writable } from "svelte/store"


const createPieceBox = ()=>{

    const {subscribe, update, set} = writable({
        white:['','','','','','','','','','','','','','','',''],
        black:['','','','','','','','','','','','','','','','']
    })

    return {
        subscribe,
        pieceBoxUpdate:({to, turn})=>{
            const {piece} = to
            update( pieceBox => {
                const idx = pieceBox[turn].indexOf('')
                console.log({to, turn})
                console.log(idx)
                pieceBox[turn][idx] = piece

                return pieceBox
            })
        },
        reset:()=>{
            set({
                white:['','','','','','','','','','','','','','','',''],
                black:['','','','','','','','','','','','','','','','']
            })
        }
    }
}

export const pieceBoxStore = createPieceBox()