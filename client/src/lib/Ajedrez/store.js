import { writable } from "svelte/store";


export const tableStore = writable([
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]]
])

//  ACA PUEDE CREAR UNA ESTRUCTURA DE DATOS DE TIPO FIFO (First In First Out)
//  export const history = writable(new history)
//  Luego Creamos un evento para cada ves que se actualise esta lista se ejecute el ultimo movimento
export const history = writable([])

export const globalUser = writable({
    // _id:'',
    // name:'', 
    player:'white',
})

export const playerStore = writable('white')
