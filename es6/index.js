import express from 'express'
import Router from './router-config.js'

const app = express();
app.listen(1111, ()=>{console.log("ES6 Server started on port:1111")})
app.use('/es6', Router)
app.use(express.static('../resources'))
app.use((req, res, next)=>{
    const error ={
        status : 404,
        message: "API Not Found"
    }
    next(error);
})
//Now when ever we throw error from application with next(error); this piece of code will handle it.
app.use((err, req, res, next)=>{
    res.statusCode= err.status || 500
    res.send({
        error: err.message || 'Internal Server Error'
    })
})

