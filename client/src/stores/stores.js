import { writable } from "svelte/store";
import { movements } from "../lib/Ajedrez/piece-Move/movements";

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
        //  recive un objeto con 2 coordenaas xy y realiza el movimiento de la pieza
        move:({from, to})=>{

            update( tb => {
                tb[from.eje_y][from.eje_x][0].children[0].innerHTML=to.piece
                tb[to.eje_y][to.eje_x][0].children[0].innerHTML=from.piece
                return tb
            })
        },
        //  recive un array de coordenadas y las pinta del color deseado
        paint:({movements, color})=>{
            update( tb => {
                movements.forEach(({y, x}) => tb[y][x][0].style.backgroundColor = color )
                return tb
            })
        },
        //  devuelve un array de movimientos (coordenadas) posibles para la pieza elegida
        movements:(from)=>{
            const {eje_x, eje_y, piece} = from
            let possibleMovements = []
            subscribe((table)=>{
                // const [col, row] = position.split('')
                // const eje_x = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[col]
                // const eje_y = row*1
                // handlerFromTo({table, eje_x, eje_y})
                possibleMovements = movements({table, from, piece})
            })
            return possibleMovements
        },
        startGame:()=>{
            // black ['♟','♜','♞','♝','♛','♚']
            // white ['♙','♖','♘','♗','♕','♔']

            update((tb)=>{
                tb[7][0][0].children[0].innerHTML = '♖'
                tb[7][1][0].children[0].innerHTML = '♘'
                tb[7][2][0].children[0].innerHTML = '♗'
                tb[7][3][0].children[0].innerHTML = '♕'
                tb[7][4][0].children[0].innerHTML = '♔'
                tb[7][5][0].children[0].innerHTML = '♗'
                tb[7][6][0].children[0].innerHTML = '♘'
                tb[7][7][0].children[0].innerHTML = '♖'

                tb[6][0][0].children[0].innerHTML = '♙'
                tb[6][1][0].children[0].innerHTML = '♙'
                tb[6][2][0].children[0].innerHTML = '♙'
                tb[6][3][0].children[0].innerHTML = '♙'
                tb[6][4][0].children[0].innerHTML = '♙'
                tb[6][5][0].children[0].innerHTML = '♙'
                tb[6][6][0].children[0].innerHTML = '♙'
                tb[6][7][0].children[0].innerHTML = '♙'

                tb[1][0][0].children[0].innerHTML = '♟'
                tb[1][1][0].children[0].innerHTML = '♟'
                tb[1][2][0].children[0].innerHTML = '♟'
                tb[1][3][0].children[0].innerHTML = '♟'
                tb[1][4][0].children[0].innerHTML = '♟'
                tb[1][5][0].children[0].innerHTML = '♟'
                tb[1][6][0].children[0].innerHTML = '♟'
                tb[1][7][0].children[0].innerHTML = '♟'

                tb[0][0][0].children[0].innerHTML = '♜'
                tb[0][1][0].children[0].innerHTML = '♞'
                tb[0][2][0].children[0].innerHTML = '♝'
                tb[0][3][0].children[0].innerHTML = '♛'
                tb[0][4][0].children[0].innerHTML = '♚'
                tb[0][5][0].children[0].innerHTML = '♝'
                tb[0][6][0].children[0].innerHTML = '♞'
                tb[0][7][0].children[0].innerHTML = '♜'
                
                return tb
            })
        },
        endGame:()=>{},
    }
}

export const tableStore = createTable()


const createTurn = ()=>{
    const { subscribe, set, update } = writable('white')

    return {
        subscribe,
        handlerTurn:()=>{
            update( t => {
                if(t==='white') return t='black'
                if(t==='black') return t='white'
                return 
            })
        },
    }
}

export const turnStore = createTurn()