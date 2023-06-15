import { moveAlfin } from "./moveAlfil.js"
import { moveCaballo } from "./moveCaballo.js"
import { movePeon } from "./movePeon.js"
import { moveReina } from "./moveReina.js"
import { moveRey } from "./moveRey.js"
import { moveTorre } from "./moveTorre.js"

export function movements ({table, from, piece}){

    if(!piece.length) return []

    const white = {
        '♙':movePeon,
        '♖':moveTorre,
        '♘':moveCaballo,
        '♗':moveAlfin,
        '♕':moveReina,
        '♔':moveRey,
    }
    if(white[piece]) return white[piece]({table, from, enemies:['♟','♜','♞','♝','♛','♚']})

    const black = {
        '♟':movePeon,
        '♜':moveTorre,
        '♞':moveCaballo,
        '♝':moveAlfin,
        '♛':moveReina,
        '♚':moveRey,
    }
    if(black[piece]) return black[piece]({table, from, enemies:['♙','♖','♘','♗','♕','♔']})

    return []
}