import { Schema , model } from "mongoose";


const userSchema = new Schema({
    fullName : {
        type : String,
        required: true
    },
    userName : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true,
        minlength : 6
    },
    gender : {
        type: String,
        required : true,
        enum : ["male" , "female" , "other"]
    },
    profilePic : {
        type : String ,
        default : ""
    }
    // createdAt , updatedAt
}, {timestamps: true})

const User = model("User", userSchema);

export default User ;