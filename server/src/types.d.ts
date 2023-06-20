export type User = {
    _id:String,
    name:String,
    email:String,
    color:'white'|'black'|'',
    performance:Performance,
    statistics:Statistics,
}
// export enum State {Entry='entry',Standby='standby',Full='Full',Progress='progress'}

export type State = 'entry' | 'standby' | 'Full' | 'progress'

export type ServerDB = {
    "id_server":String,
    "name":String,
    "players":User[],
    "table":[],
    "state":State,
    "private":String[],
    "history":Object[],
    "turn":String,
    "whiteDead":Object[],
    "blackDead":Object[],
    "chat":Chat[],
    "viewers":User[]
}
// [emtry, standby, full, progress]

type Chat = {
    message:String,
    user:User
}
type Performance = {
    games:Number,
    victories:Number,
    defeats:Number,
    draw:Number,
  }
type Statistics = {
    gamesAverage:String,
    victoriesAverage:String,
    defeatsAverage:String,
}

type Table = 
[
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
] | []