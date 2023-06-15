
const piece = {
    white:['♙','♖','♘','♗','♕','♔'],
    black:['♜','♞','♝','♛','♚','♟'],
}

export function movePeon({table, from, enemies}){
    if(!table || !from || !enemies) return []
    const {eje_x, eje_y, piece} = from   

    const move_n = {
        '♙':[
            {y: -1+eje_y, x: eje_x,    },
            {y: -2+eje_y, x: eje_x,    spc_mv:6},
            {y: -1+eje_y, x: -1+eje_x, },
            {y: -1+eje_y, x: 1+eje_x,  }
        ],
        '♟':[
            {y: 1+eje_y, x: eje_x,    },
            {y: 2+eje_y, x: eje_x,    spc_mv:1},
            {y: 1+eje_y, x: 1+eje_x,  },
            {y: 1+eje_y, x: -1+eje_x, }
        ]
    }

    
    const possibleMovements = [{x:eje_x, y:eje_y}]

    const checked = []
    move_n[piece].forEach(({y, x, spc_mv}) => {
        const condition_one = x>=0&&x<=7 && y>=0&&y<=7
        const cond_two = condition_one && !table[y][x][0].children[0].innerHTML.length
        const cond_three = condition_one && eje_y===spc_mv
        const cond_four = condition_one && enemies.includes(table[y][x][0].children[0].innerHTML)

        checked.push({cond_two, cond_three, cond_four})
    });
    if(checked[0].cond_two) possibleMovements.push(move_n[piece][0])
    if(checked[1].cond_three && checked[0].cond_two && checked[1].cond_two) {
        possibleMovements.push(move_n[piece][1])
    }
    if(checked[2].cond_four) possibleMovements.push(move_n[piece][2])
    if(checked[3].cond_four) possibleMovements.push(move_n[piece][3])

    return possibleMovements
}