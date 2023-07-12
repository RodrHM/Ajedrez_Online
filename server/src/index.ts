import httpServer from "./app";
import {conn} from './db'
import env from './env'

const PORT = env.PORT || 3001;

conn.sync({force: true}).then(()=>{
    httpServer.listen(PORT, ()=>{
        console.log(`Server is listening at Port ${PORT}`)
    });
})