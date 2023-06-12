import {Router} from 'express';
import ServersRoutes from './servers';

const router = Router();

router.use("/server", ServersRoutes)

export default router;
// router.get('/servers/:id', async (req:any, res:any)=>{
//     const {id} = req.params
//     console.log({id})
//     // console.log({servers})
//     return res.status(200).send('ok')
// })