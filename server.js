const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
require('./connect-db');
const userRouter = require('./routes/user');
app.use('/user',userRouter)
//静态设置
app.use('/index',express.static(__dirname+'/index'))
app.listen(8080,()=>{
    console.log('server is 8080');
})