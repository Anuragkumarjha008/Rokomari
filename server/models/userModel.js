import mongoose from "mongoose";

//const {v4:uuidv4}=require('uuidv4');

const userSchema = new mongoose.Schema(
    {
        id:{
            type:int,
            required: true,
            unique: true,  
        },
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        phone:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true
        },
        role:{
            type:String,
            required: true,
            enum:["employer","employee","admin"],default:"employee"
        },
        createdAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        updatedAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        gender:{
            type:String,
            required: true
        }
    }
);

const userModel=mongoose.models.user||mongoose.model('user',userSchema);

export default userModel;