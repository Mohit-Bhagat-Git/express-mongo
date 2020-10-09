import express from 'express'
import routerConfig from './router-config.js'

const app = express();
app.listen(1111, ()=>{console.log("ES6 Server started on port:1111")})
app.use('/es6', routerConfig)
app.use((req, res, next)=>{
    const error ={
        status : 404,
        message: "API Not Found"
    }
    console.log(JSON.stringify(error))
    next(error);
})
//Now when ever we throw error from application with next(error); this piece of code will handle it.
app.use((err, req, res, next)=>{
    res.statusCode= err.status || 500
    res.send({
        status: err.status || 500,
        error: err.message || 'Internal Server Error'
    })
})

