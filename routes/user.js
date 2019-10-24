const router = require('express').Router()
const userModel = require('../models/user')
//查找
//userModel.find(条件).then().catch() //查找文档
router.post('/list',(req,res)=>{
    let{page,pageSize} = req.body;
    userModel.find().skip((page-1)*pageSize).limit(pageSize).then(data=>{
        // res.send({data:data});
        res.send({code:0,msg:'操作成功',data:data})
    }).catch(
        e=>{res.send({code:1,msg:'查看数据失败'})}
    )
})

module.exports = router;