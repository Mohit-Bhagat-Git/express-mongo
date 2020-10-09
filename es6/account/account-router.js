import express from 'express';
const AccountRouter = express.Router();
AccountRouter.get('/', (req, res, next)=>{
    res.send({
        data: "Account controller"
    })
})

export default AccountRouter;