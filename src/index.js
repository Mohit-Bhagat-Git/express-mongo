const express = require('express');
const app = express();
const router = require('./router-config')
app.listen(2020, ()=>{console.log("Server started on 2020")})
app.use('/', router)
app.use(express.static("./resources"))