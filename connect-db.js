const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',()=>{
    console.log('数据库连接失败!');
})

db.on('open',()=>{
    console.log('连接数据库成功');
})