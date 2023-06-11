import { writable } from "svelte/store";

const createTable = ()=>{
    const { subscribe, update, set } = writable([
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]]
    ])

    return {
        subscribe,
        move:(from, to)=>{
            update( tb => tb[to.eje_y][to.eje_x][0].children[0].innerHTML=from.piece )
            
            update( tb => tb[from.eje_y][from.eje_x][0].children[0].innerHTML=to.piece )
        },
        paint:(movements, color)=>{
            update( tb => movements.forEach(({y, x}) => {
                tb[y][x][0].style.backgroundColor = color
            }))
        },
        
    }
}

export const table = createTable()