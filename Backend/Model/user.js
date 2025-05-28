import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "username":{
        type:String,
        required:true,
    },
    "password":{
        type:String,
        required:true,
    },
    "email":{
        type:String,
        required:true,
        unique:true
    }
})

const Patient  = mongoose.model("Patient",userSchema);

export default Patient;