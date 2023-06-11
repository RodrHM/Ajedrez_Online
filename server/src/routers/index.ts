const { Router } = require('express')

const router = Router();

// router.use('/',)

router.get('/', async (_rec:any, res:any)=>{
    
    return res.status(200).send('ok')
})


export default router;