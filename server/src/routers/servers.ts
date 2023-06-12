import { Router } from "express";
import {test} from '../controllers/servers'
// import db from './servers.json'

const router = Router();

router.get('/:id', test);

export default router;
// let servers = sv
// let server = {
//     name:'Sala 1',
//     players:[],// Cantidad y de que juegan
//     table:[],
//     state:'emtry',// [emtry, standby, full, progress]
//     private:['email', '...'],// Para que solo pueda entrar el que esta invitado 
//     history:[],
//     // player_one:{},
//     // player_two:{},
//     turn:'',
//     whiteDead:[],
//     blackDead:[],
//     chat:[],
//     viewers:[]
// }