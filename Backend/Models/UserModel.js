import {Schema,model} from 'mongoose'



//create User Schema with Validations
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"dob required"]
    },
    mobileNumber:{
        type:Number
    },
    //soft delete
    status:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})
//Create User Model for User Schema
export const UserModel = model("user",userSchema)