import express from 'express';
const Router = express.Router();
Router.get('/', (req, res, next)=>{res.send("Default response")})

export default Router;
