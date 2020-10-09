import express from 'express';
const Router = express.Router();
Router.get('/', (req, res, next)=>{res.send("Default response")})
Router.get('/error', (req, res, next)=>{next(new Error())})

export default Router;
