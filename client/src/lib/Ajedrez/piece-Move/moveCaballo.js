
const piece = {
    white:['♙','♖','♘','♗','♕','♔'],
    black:['♜','♞','♝','♛','♚','♟'],
}

export function moveCaballo ({table, from, enemies}){
    const {eje_x, eje_y} = from

    const move_n = [
        //  TOP
        {y:eje_y+2, x:eje_x+1}, //  MOVE_ONE
        {y:eje_y+2, x:eje_x-1}, //  MOVE_TWO
        //  LEFT
        {y:eje_y+1, x:eje_x+2}, //  MOVE_THREE
        {y:eje_y-1, x:eje_x+2}, //  MOVE_FOUR
        //  BOT
        {y:eje_y-2, x:eje_x+1}, //  MOVE_FIVE
        {y:eje_y-2, x:eje_x-1}, //  MOVE_SIX
        //  RIGHT
        {y:eje_y+1, x:eje_x-2}, //  MOVE_SEVEN
        {y:eje_y-1, x:eje_x-2}, //  MOVE_EIGHT
    ]

    let possibleMovements = [{x:eje_x, y:eje_y}]
    for (const {y, x} of move_n) {
        
        const condition_one = x>=0&&x<=7 && y>=0&&y<=7
        const condition_two = condition_one && !table[y][x][0].children[0].innerHTML.length
        const condition_three = condition_one && enemies.includes(table[y][x][0].children[0].innerHTML)
        if(condition_two || condition_three) possibleMovements.push({x, y})
    }

    return possibleMovements;
}