// import { playerStore, tableStore } from "../store.js"
import { tableStore as storeTable, turnStore } from '../../../stores/stores.js'

// import { movements } from "./movements.js"

let from = {}   // {eje_x, eje_y, piece}
let to = {}     // {eje_x, eje_y, piece}

//Camviar possibleMovements a movements
let possibleMovements = []

let turn=''
turnStore.subscribe( t => turn=t )

export const handlerFromTo = ({eje_x, eje_y, bg, piece})=>{

    const pieces = {
        white:['♙','♖','♘','♗','♕','♔'],
        black:['♟','♜','♞','♝','♛','♚'],
    }
    // si from no existe, bg==='' y pieces[player].includes(piece)
    if(bg==='' && JSON.stringify(from)==='{}' && pieces[turn].includes(piece)){
        from = {eje_x, eje_y, piece}
        possibleMovements = storeTable.movements({eje_x, eje_y, piece})
        storeTable.paint({movements:possibleMovements, color:'orange'})  
    }
    if(bg==='orange'){
        to = {eje_x, eje_y, piece}

        if(JSON.stringify(from)!==JSON.stringify(to)){
            storeTable.move({from, to})
            turnStore.handlerTurn()
        }
        storeTable.paint({movements:possibleMovements, color:''})
        
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