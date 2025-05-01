let mongo =require("mongoose");

let Patient_collection=mongo.Schema({
    patient_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    Age:{
     type:Number,
     required:true
    },
    Gender:{
    type:String,
    required:true
    },
    Phone_no:{
    type:String,
    },
    Address:{
    type:String,
    require:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongo.model("Patient" ,Patient_collection)