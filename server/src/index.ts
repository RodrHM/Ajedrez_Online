// import dotenv from 'dotenv'
// require('dotenv').config()
// dotenv.config()
// const {} = process.env
// console.log(process)
import httpServer from "./app";
// console.log('algo')
const PORT = 3001;

httpServer.listen(PORT, ()=>{
    console.log(`Server is listening at Port ${PORT}`)
});

// app.httpServer.listen(app.app.get('port'), () => {
//     console.log('Express server listening on port ' + app.app.get('port'))
//   })
