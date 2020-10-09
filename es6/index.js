import express from 'express'
import Router from './router-config.js'

const app = express();
app.listen(1111, ()=>{console.log("ES6 Server started on port:1111")})
app.use('/es6', Router)

