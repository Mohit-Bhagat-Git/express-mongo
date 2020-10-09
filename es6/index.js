import express from 'express'
import Router from './router-config.js'

const app = express();
app.listen(1111, ()=>{console.log("ES6 Server started on port:1111")})
app.use('/es6', Router)
app.use((req, res, next)=>{
    const error ={
        status : 404,
        message: "API Not Found"
    }
    console.log(JSON.stringify(error))
    next(error);
})

app.use((err, req, res, next)=>{
    res.statusCode= err.status
    res.send({
        error: err.message
    })
})

