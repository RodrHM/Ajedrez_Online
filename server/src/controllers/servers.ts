import dataBase from './data-base.json'
import { Request, Response } from 'express'

export const test = async (req:Request, res:Response)=>{
    const {id} = req.params
    const numId = parseInt(id)
    console.log(dataBase[numId-1])
    console.log({id})
    // console.log({servers})
    if(numId>0 && numId<7) return res.status(200).json(dataBase[numId-1])

    return res.status(200).send('esta id no es valida')
}
