import express from 'express';
import ProductRouter from './product/product-router.js'
import AccountRounter from './account/account-router.js'
const routerConfig = express();

routerConfig.use('/product', ProductRouter)
routerConfig.use('/account', AccountRounter)
routerConfig.get('/error', (req, res, next)=>{next(new Error())})

export default routerConfig;
