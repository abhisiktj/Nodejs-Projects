const mongoose=require("mongoose");


const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must Provide Task"],
        trim:true,
        maxlength:[50,"name can not be more tha 50 characters"]
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('Task',taskSchema);