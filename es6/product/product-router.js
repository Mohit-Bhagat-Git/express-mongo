import express from 'express';
const ProductRouter = express.Router();
ProductRouter.get('/', (req, res, next)=>{
    res.send({
        data: "Product controller"
    })
})

export default ProductRouter;