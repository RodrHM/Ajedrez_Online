
const piece = {
    white:['♙','♖','♘','♗','♕','♔'],
    black:['♜','♞','♝','♛','♚','♟'],
}
export function moveRey ({table, from, enemies}){

    const {eje_x, eje_y} = from 
    
    let possibleMovements = [{x:eje_x, y:eje_y}]
    // {y: 1+eje_y, x: eje_x} 
    // ALL_MOVEMENTH 
    const move_n = [
        {dy: 1,  dx: 0},   // TOP
        {dy: 0,  dx: 1},   // LEFT
        {dy:-1,  dx: 0},   // BOT
        {dy: 0,  dx:-1},   // RIGHT
        {dy: 1,  dx: 1},   // TOP
        {dy:-1,  dx: 1},   // LEFT
        {dy: 1,  dx:-1},   // BOT
        {dy:-1,  dx:-1},   // RIGHT
    ]
    
    for (let {dy, dx} of move_n) {
        
        let count = 1
        const y = eje_y+(count*dy)
        const x = eje_x+(count*dx)
        const condition_one = x>=0&&x<=7 && y>=0&&y<=7
        const condition_two = condition_one && !table[y][x][0].children[0].innerHTML.length
        const condition_three = condition_one && enemies.includes(table[y][x][0].children[0].innerHTML)
        if(condition_two || condition_three) possibleMovements.push({x, y})
    }

    return possibleMovements;
}