const express = require('express')
const morgan = require('morgan')
// import express from 'express'
import './db'
import router from './routers'


const app = express()

app.use(express.json({ limit: '50mb'}))
app.use(morgan('dev'))

// app.use(express.json({limit:'50mb'}))

app.use('/api', router)

export default app