// import { playerStore, tableStore } from "../store.js"
import { socketServerStore } from '../../../stores/socket.js'
import { tableStore, turnStore } from '../../../stores/stores.js'
import { userStore } from '../../../stores/users.js'

// import { movements } from "./movements.js"

let from = {}   // {eje_x, eje_y, piece}
let to = {}     // {eje_x, eje_y, piece}

//Camviar possibleMovements a movements
let possibleMovements = []

let turn = ''
turnStore.subscribe( t => turn=t )
let user = {}
userStore.subscribe( u => user=u)

export const handlerFromTo = ({eje_x, eje_y, bg, piece})=>{
    
    const pieces = {
        white:['♙','♖','♘','♗','♕','♔'],
        black:['♟','♜','♞','♝','♛','♚'],
    }
    // si from no existe, bg==='' y pieces[player].includes(piece)
    if(bg==='' && JSON.stringify(from)==='{}' && turn===user.color && pieces[turn].includes(piece)){
        from = {eje_x, eje_y, piece}
        possibleMovements = tableStore.movements({eje_x, eje_y, piece})
        tableStore.paint({movements:possibleMovements, color:'orange'})  
    }
    if(bg==='orange'){
        to = {eje_x, eje_y, piece}

        if(JSON.stringify(from)!==JSON.stringify(to)){
            // tableStore.move({from, to})
            socketServerStore.movePiece({from, to})
        }
        tableStore.paint({movements:possibleMovements, color:''})
        
        if(to.piece.length){
            // aca hacemos que aparesca en el "cementerio"
        }
        
        from = {}
        to = {}
    }

}

        // let virtualTable = [
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','',''],
        //     ['','','','','','','','']
        // ]