import { Sequelize, DataTypes } from "sequelize";

const serverModel = (sequelize:Sequelize)=>{
    sequelize.define('Server', {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // unique:true,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        players:{
            type:DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue:[]
        },
        table:{
            type:DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
            defaultValue:[
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','','','','','','','']
            ],
        },
        state:{
            type:DataTypes.ENUM,
            values:['entry', 'standby', 'Full', 'progress'],
            defaultValue:'entry'
        },
        private:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:[],
        },
        history:{
            type:DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue:[],
        },
        turn:{
            type:DataTypes.ENUM,
            values:['white', 'black'],
            defaultValue:'white'
        },
        whiteDead:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:['','','','','','','','','','','','','','','','']
        },
        blackDead:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:['','','','','','','','','','','','','','','','']
        },
        chat:{
            type:DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue:[],
        },
        vieweres:{
            type:DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue:[],
        },
    },{
        timestamps: false
    })
}

export default serverModel;

// export type ServerDB = {
//     "id_server":String,
//     "name":String,
//     "players":User[],
//     "table":[],
//     "state":State,
//     "private":String[],
//     "history":Object[],
//     "turn":String,
//     "whiteDead":Object[],
//     "blackDead":Object[],
//     "chat":Chat[],
//     "viewers":User[]
// }