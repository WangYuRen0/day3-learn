const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    page:{type:String,require:true},
    pageSize:{type:String,require:true}
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;