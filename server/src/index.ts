// import dotenv from 'dotenv'
// require('dotenv').config()
// dotenv.config()
// const {} = process.env
// console.log(process)
import app from "./app";

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server is listening at Port ${PORT}`)
});
