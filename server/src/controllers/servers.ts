import dataBase from './data-base.json'

export const test = async (req:any, res:any)=>{
    const {id} = req.params
    
    console.log(dataBase[id-1])
    console.log({id})
    // console.log({servers})
    if(id>0 && id<7) return res.status(200).json(dataBase[id-1])

    return res.status(200).send('esta id no es valida')
}
